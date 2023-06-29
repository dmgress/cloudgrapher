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

function _styles() {
  gulp.src(['app/styles/*.cycss']).pipe(gulp.dest('dist/styles'));
  return gulp.src(['app/styles/*.css'])
    .pipe($.if('*.css', $.autoprefixer(AUTOPREFIXER_BROWSERS)))
    .pipe(gulp.dest('.tmp/styles'));
};


// Lint JavaScript
function _jshint() {
  return gulp.src('app/scripts/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
};

function _javascript() {
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
};


function _html() {

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
};


//Optimize images
function _images() {
  return gulp.src([
      'app/images/**/aws*.png',
      'app/images/**/unknown.png',
      'app/images/**/aws*.svg'
    ])
    // .pipe($.cache($.imagemin({
    //   progressive: true,
    //   interlaced: true
    // })))
    .pipe(gulp.dest('dist/images')).pipe($.size({
      title: 'images'
    }));
};

function _fonts() {
  return gulp.src(require('main-bower-files')().concat('app/fonts/**/*'))
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest('dist/fonts'));
};

function _extras() {
  return gulp.src([
    'app/*.*',
    '!app/*.html',
    '!app/**/*~',
    '!app/**/*swp',
    'node_modules/apache-server-configs/dist/.htaccess'
  ], {
    dot: true,
    allowEmpty: true,
  }).pipe(gulp.dest('dist'));
};

// clear all caches created by gulp-cache
// do this if weird stuff happens with for instance images
function clear(done) {
  return $.cache.clearAll(done);
};

function _connect() {
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
};

async function _clean(){
  const { deleteAsync } = await import('del');
  return deleteAsync(['.tmp', 'dist']);
};

function _serve() {
  BUILD_ENVIRONMENT = 'development';
  require('opn')('http://' + HTTP_HOST + ':' + HTTP_PORT);
};

exports.serve = gulp.series(_connect, _watch, _serve)

// serve from build to ensure everything is there
function _servebuild() {
  gulp.start('build');
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')().use(serveStatic('dist')).use(serveIndex('dist'));
  require('http').createServer(app).listen(HTTP_PORT, HTTP_HOST).on('listening', function() {
    console.log('Serving distribution at http://' + HTTP_HOST + ':' + HTTP_PORT);
  });
};

// inject bower components
function _wiredep() {
  var wiredep = require('wiredep').stream;

  return gulp.src('app/*.html')
    .pipe(wiredep())
    .pipe(gulp.dest('app'));
};

function _watch() {
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
};

function instrument() {
  return gulp.src('app/scripts/**/*.js')
    .pipe($.istanbul({
      includeUntested: true
    }))
    .pipe($.istanbul.hookRequire())
};

function test(done) {
  return gulp.src('specs/**.js')
    .pipe($.jasmine({includeStackTrace: true}))
    .on('error', function(error) {
      // we have an error
      done(error);
    })
    .pipe($.istanbul.writeReports({
      dir: './.tmp/js',
      reporters: ['lcov', 'json', 'text-summary']
    }));
};

function _build() {
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
};

function deploy() {
  return gulp.src('dist/**').pipe($.ghPages());
};

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

function patch() { return inc('patch'); }
function feature() { return inc('minor'); }
function major() { return inc('major'); }

// gulp.task('default', ['clean'], function() {
//   gulp.start('build');
// });

exports.patch = patch;
exports.feature = feature;
exports.release = major;
exports.deploy = deploy;
exports.build = gulp.series(_jshint, gulp.parallel(_html, _images, _fonts, _extras), test, _build)

exports.default = gulp.series(_clean, exports.build);
exports.styles = _styles;
exports.javascript = _javascript
exports.html = gulp.series(gulp.parallel(_styles, _javascript), _html)
exports.clean = gulp.series(clear, _clean);
exports.servebuild = gulp.series(_clean, _build, _servebuild)
exports.wiredep = _wiredep;
exports.watch = gulp.series(_connect, _watch)
exports.test = gulp.series(instrument, test)

exports.testwatch = gulp.watch([
  'specs/**.js',
  'app/scripts/**.js'
], test);
