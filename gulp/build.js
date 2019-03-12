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
const templateCache = require('gulp-angular-templatecache');
const stripHtml = require('./plugins/stripHtml');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

function lintJs() {
    return gulp.src('./src/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
}

function compileJs() {
    return browserify({entries: ['./node_modules/@wk/css/dist/modernizr.js', './src/index.js', './dist/templates/templates.js']})
        .transform('babelify', 
        { 
            plugins: ['@babel/plugin-transform-regenerator', '@babel/plugin-transform-async-to-generator'], 
            presets: [
                [
                    '@babel/preset-env', 
                    {
                        useBuiltIns: 'usage'
                    }
                ]
            ],
            ignore: [
                'node_modules'
            ] 
        })
        .bundle()
        .pipe(source('main.bundle.js'))
        .pipe(buffer())
        .pipe(sourceMaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('./dist'));
}

function compileSass() {
    return gulp.src('./src/index.scss', {base: ''})
        .pipe(sass({
            includePaths: [
                './node_modules/@wk/css/src',
                './node_modules/@wk/sass-utils/src',
                './node_modules/@wk/fonts/src',
                './node_modules/modularscale-sass/stylesheets/',
                './node_modules/breakpoint-sass/stylesheets/',
                './node_modules/susy/sass/',
                './node_modules/@wk/icons/src',
                './node_modules/@wk/icons/dist'
            ]
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('styles.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('./dist'));
}

function bundleTemplates() {
    return gulp.src('./src/**/*.html', {mark: true})
        .pipe(stripHtml())
        .pipe(templateCache({standalone: true, moduleSystem: 'ES6'}))
        .pipe(gulp.dest('./dist/templates'));
}

function injectBundles() {
    const sources = gulp.src(['./dist/*.js', './dist/*.css'], {read: false});
    return gulp.src('./src/index.html')
        .pipe(inject(sources, { removeTags: true, ignorePath: 'dist' }))
        .pipe(gulp.dest('./dist'));
}

module.exports = {
    lintJs,
    compileJs,
    compileSass,
    bundleTemplates,
    injectBundles
}
