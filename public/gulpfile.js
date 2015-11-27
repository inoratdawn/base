var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');

/* Compile Our Sass */
gulp.task('sass', function() {
    return gulp.src('assets/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('static/css'))
        //.pipe(rename({suffix: '.min'}))
        //.pipe(minifycss())
        //.pipe(gulp.dest('stylesheets'))
        .pipe(livereload());
});

/* Watch Files For Changes */
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('assets/sass/**/*.scss', ['sass']);
    gulp.watch('**/*').on('change', livereload.changed);
});

gulp.task('default', ['sass', 'watch']);