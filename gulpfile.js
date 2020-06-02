var gulp = require('gulp');
var template = require('gulp-template-html');
gulp.task('default', function () {
    return gulp.src('pages/*.html')
        .pipe(template('templates/template.html'))
        .pipe(gulp.dest('output'));
});

var sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('output/scss'));
});

gulp.task('sass:watch', function () {
    gulp.watch('sass/*.scss', ['sass']);
});