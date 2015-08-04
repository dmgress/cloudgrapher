/* jshint node:true */
'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var source = require('vinyl-source-stream');
var $ = require('gulp-load-plugins')({
  rename: {
    'gulp-gh-pages': 'ghPages'
  }
});

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('styles', function () {
  return gulp.src(['app/styles/main.css'])
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('.tmp/styles'));
});

// Lint JavaScript
gulp.task('jshint', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});

gulp.task('javascript', function () {
  return browserify({
    entries:['app/scripts/edit.js'],
    debug: true
  }).bundle()
    .pipe(source('edit.bundle.js'))
    .pipe($.buffer())
    .pipe($.sourcemaps.init({loadMaps: true}))
      .pipe($.uglify())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('.tmp/js'));
});

gulp.task('html', ['styles', 'javascript'], function () {
  var assets = $.useref.assets({searchPath: ['.tmp','app','.']});
  //var assets = $.useref.assets();

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
    //.pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest('dist'));
});

//Optimize images
gulp.task('images', function () {
  return gulp.src([
      'app/images/**/aws*.png',
      'app/images/**/unknown.png'
    ])
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images')).pipe($.size({title: 'images'}));
});

gulp.task('fonts', function () {
  return gulp.src(require('main-bower-files')().concat('app/fonts/**/*'))
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', function () {
  return gulp.src([
    'app/*.*',
    '!app/*.html',
    '!app/**/*~',
    '!app/**/*swp',
    'node_modules/apache-server-configs/dist/.htaccess'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

// clear all caches created by gulp-cache
// do this if weird stuff happens with for instance images
gulp.task('clear', function (done) {
  return $.cache.clearAll(done);
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('connect', function () {
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')()
    .use(require('connect-livereload')({port: 35729}))
    .use(serveStatic('.tmp'))
    .use(serveStatic('app'))
    .use(serveStatic('dist'))
    // paths to bower_components should be relative to the current file
    // e.g. in app/index.html you should use ../bower_components
    .use('/bower_components', serveStatic('bower_components'))
    .use(serveIndex('app'));

  require('http').createServer(app)
    .listen(9000)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:9000');
    });
});

gulp.task('serve', ['connect', 'watch'], function () {
  require('opn')('http://localhost:9000');
});

// serve from build to ensure everything is there
gulp.task('serve-build', ['clean'], function () {
  gulp.start('build');
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')().use(serveStatic('dist')).use(serveIndex('dist'));
  require('http').createServer(app).listen(9000).on('listening', function () {
    console.log('Serving distribution at http://localhost:9000');
  });
});

// inject bower components
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  gulp.src('app/*.html')
    .pipe(wiredep())
    .pipe(gulp.dest('app'));
});

gulp.task('watch', ['connect'], function () {
  $.livereload.listen();

  // watch for changes
  gulp.watch([
    'app/*.html',
    '.tmp/styles/**/*.css',
    '.tmp/js/**/*.js',
    'app/images/**/*'
  ]).on('change', $.livereload.changed);

  gulp.watch('app/styles/**/*.css', ['styles']);
  gulp.watch('app/scripts/**/*.js', ['javascript']);
  gulp.watch('bower.json', ['wiredep']);
});

gulp.task('test', function () {
  var jasmine = require("gulp-jasmine");
  gulp.src('specs/**.js')
    .pipe(jasmine());
});

gulp.task('test-watch', function () {
    gulp.watch([
      'specs/**.js',
      'app/scripts/**.js'
    ], ['test']);
});

gulp.task('build', ['jshint', 'html', 'images', 'fonts', 'extras'], function () {
  gulp.src([
      'bower_components/ace-builds/src-min-noconflict/theme-tomorrow_night_eighties.js',
      'bower_components/ace-builds/src-min-noconflict/worker-json.js',
      'bower_components/ace-builds/src-min-noconflict/mode-json.js'
    ])
    .pipe($.size({title: 'copy ace js'}))
    .pipe(gulp.dest('dist/js/ace/'));
  return gulp.src('dist/**').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('deploy', function() {
  return gulp.src('dist/**').pipe($.ghPages());
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
