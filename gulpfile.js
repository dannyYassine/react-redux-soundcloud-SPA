
var nodemon         = require('gulp-nodemon');
var gulp            = require('gulp');
var sourcemaps      = require('gulp-sourcemaps');
var path            = require('path');
var sass            = require('gulp-sass');

gulp.task('nodemon', function (cb) {
    var started = false;

    return nodemon({
        script: 'src/server/server.js',
        watch: ['src/**/*.js'],
        ignore: ['src/web/**']
    })
        .on('start', function () {
            if (!started) {
                started = true;
                return cb();
            }
        })
        .on('restart', function () {

        });
});

gulp.task('sass', function () {
    return gulp.src('./src/web/app/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.', { sourceRoot: path.join(__dirname, 'dist/css') }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/web/scss/**/*.scss', ['sass']);
});