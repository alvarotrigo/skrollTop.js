var gulp = require('gulp');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');

gulp.task('js', function() {
    gulp.src([
        './skrollTop.js',
        './easings.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./dist'))
        .pipe(uglify({
            output: {
                comments: '/\/*^!/'
            },
            compress:{
                drop_console: true
            }
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['js']);