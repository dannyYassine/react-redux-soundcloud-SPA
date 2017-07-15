
var nodemon         = require('gulp-nodemon');
var gulp            = require('gulp');


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