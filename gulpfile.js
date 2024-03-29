var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var notify = require('gulp-notify');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var buffer = require('vinyl-buffer');
var replace = require('gulp-replace');

var imagemin = require('gulp-imagemin');

var ghPages = require('gulp-gh-pages');

var hbs = require('gulp-hbs');
var baseUrl = ( process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'build' )
          ? '/fantasy-map'
          : '';
hbs.registerHelper('asset_path', function (assetPath) {
  return baseUrl + assetPath;
});

var browserSync = require('browser-sync');
var reload = browserSync.reload;
var historyApiFallback = require('connect-history-api-fallback')

/*
  ghdeploy Task
*/

gulp.task('gh-deploy', function() {
  gulp.src('./build/**/*')
    .pipe(ghPages());
});

/*
  HTML Task
*/

gulp.task('html',function() {
  gulp.src('index.json')
    .pipe(hbs('index.hbs'))
    .pipe(gulp.dest('./build/'))
    .pipe(reload({stream:true}))
});

/*
  Styles Task
*/

gulp.task('styles',function() {
  // Compiles CSS
  gulp.src('css/app.scss')
    .pipe(sass())
    .pipe(replace('$asset_path', baseUrl))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build/css/'))
    .pipe(reload({stream:true}))
});

/*
  Images
*/
gulp.task('images',function(){
  gulp.src('images/**')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
});

/*
  Browser Sync
*/
gulp.task('browser-sync', function() {
    browserSync({
        // we need to disable clicks and forms for when we test multiple rooms
        server : {
          baseDir: 'build',
        },
        middleware : [ historyApiFallback() ],
        ghostMode: false
    });
});

function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
}

function exitOnError() {
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
    process.exit(1);
}

function buildScript(file, watch) {

    var props = {
        debug : true
    };
    const src = './scripts/' + file;
    const defaultBundler = browserify(src, props);
    // watchify() if watch requested, otherwise run browserify() once
    const bundler = watch ? watchify(defaultBundler) : defaultBundler;
    const augmentedBundler = bundler.transform(babelify);

    function rebundle() {
        var stream = augmentedBundler.bundle();

        var errorHandler = watch ? handleErrors : exitOnError;

        return stream
            .on('error', errorHandler)
            .pipe(source(file))
            // .pipe(buffer())
            // .pipe(uglify())
            // .pipe(rename('app.min.js'))
            .pipe(replace('$baseUrl', baseUrl))
            .pipe(gulp.dest('./build'))
            .pipe(reload({ stream: true }))
    }

    // listen for an update and run rebundle
    bundler.on('update', function() {
        rebundle();
        gutil.log('Rebundle...');
    });

    // run it once the first time buildScript is called
    return rebundle();
}

gulp.task('scripts', function() {
  return buildScript('app.js', false); // this will once run once because we set watch to false
});

// run 'scripts' task first, then watch for future changes
gulp.task('default', [ 'build','browser-sync' ], function() {
  gulp.watch('css/**/*', [ 'styles' ]); // gulp watch for sass changes
  gulp.watch('*.html', [ 'html' ]); // gulp watch for HTML changes
  return buildScript('app.js', true); // browserify watch for JS changes
});

gulp.task('watch', [ 'default' ]);

gulp.task('build', [ 'images', 'styles', 'scripts', 'html' ]);
gulp.task('deploy', [ 'gh-deploy' ]);
