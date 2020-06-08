var gulp = require('gulp');
var template = require('gulp-template-html');
var gulpMerge = require('gulp-merge');
gulp.task('default', function () {
    return gulp.src('pages/*.html')
        .pipe(template('templates/template.html'))
        .pipe(gulp.dest('output'));
});

var sass = require('gulp-sass');
sass.compiler = require('node-sass');
gulp.task('sass', function () {
    return gulpMerge(
        gulp.src('sass/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('output/css'))
    ),
    gulp.src('sass/bootstrap/bootstrap.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('output/css')),
    gulp.src('sass/bootstrap/bootstrap_dark.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('output/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('sass/*.scss', ['sass']);
});