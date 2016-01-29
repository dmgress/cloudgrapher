/* jshint node:true */
'use strict';

/**
 * Cloud9 (c9.io) provides environment variables IP and PORT, use the
 * values of these variables or fall back to localhost:9000
 */
var HTTP_HOST = process.env.IP || 'localhost';
var HTTP_PORT = process.env.PORT || 9000;

var BUILD_ENVIRONMENT = process.env.BUILD_ENVIRONMENT || 'production';

/**
 * LiveReload uses 35729 by default, but Cloud9 only opens
 * ports (8080, 8081, 8082). Try using port 8082 for LiveReload when running
 * on Cloud9 but fall back to default in any other case.
 */
var LIVERELOAD_PORT = process.env.IP ? 8082 : 35729;

var gulp = require('gulp');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var source = require('vinyl-source-stream');
var $ = require('gulp-load-plugins')({
  rename: {
    'gulp-gh-pages': 'ghPages',
    'gulp-tag-version': 'tag_version'
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

gulp.task('styles', function() {
  gulp.src(['app/styles/*.cycss']).pipe(gulp.dest('dist/styles'));
  return gulp.src(['app/styles/*.css'])
    .pipe($.if('*.css', $.autoprefixer(AUTOPREFIXER_BROWSERS)))
    .pipe(gulp.dest('.tmp/styles'));
});

// Lint JavaScript
gulp.task('jshint', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});

gulp.task('javascript', function() {
  return browserify({
      entries: ['app/scripts/edit.js'],
      debug: true
    }).bundle()
    .pipe(source('edit.bundle.js'))
    .pipe($.buffer())
    .pipe($.sourcemaps.init({
      loadMaps: true
    }))
    .pipe($.if(BUILD_ENVIRONMENT === 'production', $.uglify()))
    .pipe($.sourcemaps.write('./'))
    .pipe($.livereload())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('html', ['styles', 'javascript'], function() {

  var productionHtml = function(file) {
    return require('gulp-match')(file, '*.html') && BUILD_ENVIRONMENT === 'production';
  }

  return gulp.src('app/*.html')
    .pipe($.cdnizer({
      relativeRoot: 'app/',
      allowMin: true,
      files: [{
        file: 'bower_components/jquery/dist/jquery.js',
        package: 'jquery',
        cdn: '//cdn.jsdelivr.net/jquery/${version}/jquery.min.js'
      }, {
        file: 'bower_components/font-awesome/css/font-awesome.css',
        package: 'font-awesome',
        cdn: '//maxcdn.bootstrapcdn.com/font-awesome/${version}/css/font-awesome.min.css'
      }]
    }))
    .pipe($.useref({
      searchPath: ['.tmp', 'app', '.']
    }))
    .pipe($.if('*.css', $.csso()))
    .pipe($.if(productionHtml, $.htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      collapseBooleanAttributes: true
    })))
    .pipe(gulp.dest('dist'));
});

//Optimize images
gulp.task('images', function() {
  return gulp.src([
      'app/images/**/aws*.png',
      'app/images/**/unknown.png',
      'app/images/**/aws*.svg'
    ])
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images')).pipe($.size({
      title: 'images'
    }));
});

gulp.task('fonts', function() {
  return gulp.src(require('main-bower-files')().concat('app/fonts/**/*'))
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', function() {
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
gulp.task('clear', function(done) {
  return $.cache.clearAll(done);
});

gulp.task('clean', ['clear'], function() {
  var del = require('del')
  return del(['.tmp', 'dist']);
});

gulp.task('connect', function() {
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')()
    .use(require('connect-livereload')({
      port: LIVERELOAD_PORT
    }))
    .use(serveStatic('.tmp'))
    .use(serveStatic('app'))
    .use(serveStatic('dist'))
    // paths to bower_components should be relative to the current file
    // e.g. in app/index.html you should use ../bower_components
    .use('/bower_components', serveStatic('bower_components'))
    .use(serveIndex('app'));

  require('http').createServer(app)
    .listen(HTTP_PORT, HTTP_HOST)
    .on('listening', function() {
      console.log('Started connect web server on http://' +
        HTTP_HOST + ':' + HTTP_PORT);
    });
});

gulp.task('serve', ['connect', 'watch'], function() {
  BUILD_ENVIRONMENT = 'development';
  require('opn')('http://' + HTTP_HOST + ':' + HTTP_PORT);
});

// serve from build to ensure everything is there
gulp.task('serve-build', ['clean'], function() {
  gulp.start('build');
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')().use(serveStatic('dist')).use(serveIndex('dist'));
  require('http').createServer(app).listen(HTTP_PORT, HTTP_HOST).on('listening', function() {
    console.log('Serving distribution at http://' + HTTP_HOST + ':' + HTTP_PORT);
  });
});

// inject bower components
gulp.task('wiredep', function() {
  var wiredep = require('wiredep').stream;

  gulp.src('app/*.html')
    .pipe(wiredep())
    .pipe(gulp.dest('app'));
});

gulp.task('watch', ['connect'], function() {
  $.livereload.listen(LIVERELOAD_PORT);

  // watch for changes
  gulp.watch([
    'app/*.html',
    '.tmp/styles/**/*.css',
    '.tmp/styles/**/*.cycss',
    '.tmp/js/**/*.js',
    'app/images/**/*'
  ]).on('change', $.livereload.changed);

  gulp.watch('app/styles/**/*.css', ['styles']);
  gulp.watch('app/scripts/**/*.js', ['javascript']);
  gulp.watch('bower.json', ['wiredep']);
});

gulp.task('instrument', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe($.istanbul({
      includeUntested: true
    }))
    .pipe($.istanbul.hookRequire())
});

gulp.task('test', ['instrument'], function() {
  gulp.src('specs/**.js')
    .pipe($.jasmine({includeStackTrace: true}))
    .pipe($.istanbul.writeReports({
      dir: './.tmp/js',
      reporters: ['lcov', 'json', 'text-summary']
    }));
});

gulp.task('test-watch', function() {
  gulp.watch([
    'specs/**.js',
    'app/scripts/**.js'
  ], ['test']);
});

gulp.task('build', ['jshint', 'html', 'images', 'fonts', 'extras', 'test'], function() {
  gulp.src([
      'bower_components/ace-builds/src-min-noconflict/theme-tomorrow_night_eighties.js',
      'bower_components/ace-builds/src-min-noconflict/worker-json.js',
      'bower_components/ace-builds/src-min-noconflict/mode-json.js'
    ])
    .pipe($.size({
      title: 'copy ace js'
    }))
    .pipe(gulp.dest('dist/js/ace/'));
  return gulp.src('dist/**').pipe($.size({
    title: 'build',
    gzip: true
  }));
});

gulp.task('deploy', function() {
  return gulp.src('dist/**').pipe($.ghPages());
});

/**
 * Bumping version number and tagging the repository with it.
 * Please read http://semver.org/
 *
 * You can use the commands
 *
 *     gulp patch     # makes v0.1.0 → v0.1.1
 *     gulp feature   # makes v0.1.1 → v0.2.0
 *     gulp release   # makes v0.2.1 → v1.0.0
 *
 * To bump the version numbers accordingly after you did a patch,
 * introduced a feature or made a backwards-incompatible release.
 */

function inc(importance) {
    // get all the files to bump version in
    return gulp.src(['./package.json'])
        // bump the version number in those files
        .pipe($.bump({type: importance}))
        // save it back to filesystem
        .pipe(gulp.dest('./'))
        // commit the changed version number
        .pipe($.git.commit('bumps package version'))

        // read only one file to get the version number
        .pipe($.filter('package.json'))
        // **tag it in the repository**
        .pipe($.tag_version());
}

gulp.task('patch', function() { return inc('patch'); })
gulp.task('feature', function() { return inc('minor'); })
gulp.task('release', function() { return inc('major'); })

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
