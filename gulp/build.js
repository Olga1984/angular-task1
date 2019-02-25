const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const inject = require('gulp-inject');
const eslint = require('gulp-eslint');

sass.compiler = require('node-sass');

function lintJs() {
    return gulp.src('../src/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
}

function compileJs() {
    return browserify('../src/index.js')
        .transform('babelify', {presets: ['@babel/preset-env']})
        .bundle()
        .pipe(source('main.bundle.js'))
        .pipe(buffer())
        .pipe(sourceMaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('../dist'));
}

function compileSass() {
    return gulp.src('../src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(gulp.dest('../dist'));
}

function injectBundles() {
    const sources = gulp.src(['../dist/*.js', '../dist/*.css'], {read: false});
    return gulp.src('../src/index.html')
        .pipe(inject(sources), { removeTags: true })
        .pipe(gulp.dest('../dist'));
}

module.exports = {
    lintJs,
    compileJs,
    compileSass,
    injectBundles
}
