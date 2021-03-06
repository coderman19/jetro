// обьявление переменных
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin');

// обьявление тасков
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // исходный файл
        .pipe(sass({ outputStyle: 'compressed' })) // минификация стилей
        .pipe(rename({ suffix: '.min' }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions']
        }))
        .pipe(gulp.dest('app/css')) // результат
        .pipe(browserSync.reload({ stream: true }))
});

// конкатенация css файлов
gulp.task('style', function() {
    return gulp.src([
            'node_modules/normalize.css/normalize.css',
            'node_modules/slick-carousel/slick/slick.css',
            'node_modules/magnific-popup/dist/magnific-popup.css'
        ])
        .pipe(concat('libs.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('app/css'))
});

// конкатенация js файлов
gulp.task('script', function() {
    return gulp.src([

            'node_modules/slick-carousel/slick/slick.js',
            'node_modules/magnific-popup/dist/jquery.magnific-popup.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
});

// слежение за изменениями файлов
gulp.task('html', function() {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});

// gulp.task('scss', function() {
//     return gulp.src('app/*.scss')
//         .pipe(browserSync.reload({ stream: true }))
// });

gulp.task('js', function() {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({ stream: true }))
});



gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('js'));
});


gulp.task('default', gulp.parallel('style', 'script', 'sass', 'watch', 'browser-sync'))