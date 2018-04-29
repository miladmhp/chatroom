var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");
var cleanCSS = require("gulp-clean-css");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function(){
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./css/'));
});

gulp.task('js', function(){
    return gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/material-design-lite/material.min.js',
        './scripts/*.js'
    ]).pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./js/'));
});

gulp.task('default', function () {
    gulp.watch([ './scss/style.scss', './scripts/*.js'], ['css', 'js']);
});
