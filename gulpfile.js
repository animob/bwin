const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Компиляция Sass в CSS
gulp.task('sass', function() {
  return gulp.src(['./src/scss/**/*.scss'])
    .pipe(concat('style.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// Минификация CSS
gulp.task('minify-css', function() {
  return gulp.src('./dist/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
});

// Минификация JS
gulp.task('minify-js', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

// Задача для обработки изображений
gulp.task('images', function() {
  return gulp.src('./src/img/**/*')
    .pipe(gulp.dest('./dist/img'));
});

// Наблюдение за изменениями файлов
gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass', 'minify-css'));
});

// Задача по умолчанию
gulp.task('default', gulp.series('sass', 'minify-css', 'minify-js', 'images', 'watch'));
