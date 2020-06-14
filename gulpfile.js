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
const browserSync = require('browser-sync').create();
gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
      .pipe(sass().on('error',sass.logError))
      .pipe(gulp.dest('output/css'))
      .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
    browserSync.init({
        server: {
            baseDir: "./output",
            index: "/index.html"
        }
    });
    gulp.watch('sass/*.scss', sass)
    // gulp.watch('./*.html').on('change',browserSync.reload);
    // gulp.watch('./js/**/*.js').on('change', browserSync.reload);
});