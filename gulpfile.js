let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    terser = require('gulp-terser'),
    cssmin = require('gulp-cssmin');


gulp.task('style', function() {
    return gulp.src([
            'node_modules/normalize.css/normalize.css',
            'node_modules/owl.carousel/dist/assets/owl.carousel.css',
        ])
        .pipe(concat('libs.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('app/css'))
});

gulp.task('script', function() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/owl.carousel/dist/owl.carousel.js',
        ])
        .pipe(concat('libs.min.js'))
        .pipe(terser())
        .pipe(gulp.dest('app/js'))
});

gulp.task('script-min', function() {
    return gulp.src([
            'app/js/main.js',
        ])
        .pipe(concat('main.min.js'))
        .pipe(terser())
        .pipe(gulp.dest('app/js'))
});

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 8 versions'] }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('html', function() {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});
gulp.task('js', function() {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({ stream: true }))
});


gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('js'))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('default', gulp.parallel('script', 'style', 'script-min', 'sass', 'watch', 'browser-sync'))