const browserSync = require('browser-sync');
const gulp = require('gulp');
const { compileJs, compileSass, injectBundles, lintJs, bundleTemplates } = require('./build');

function watchJs() {
    return gulp.watch('./src/**/*.js', done => {
        compileJs();
        lintJs();
        injectBundles();
        browserSync.reload();
        done()
    });
}

function watchSass() {
    return gulp.watch('./src/**/*.scss', done => {
        compileSass();
        injectBundles();
        browserSync.reload();
        done()
    });
}

function watchHtml() {
    return gulp.watch('./src/index.html', done => {
        injectBundles();
        browserSync.reload();
        done();
    })
}

function watchTemplates() {
    return gulp.watch('./src/**/*.html', done => {
        bundleTemplates();
        compileJs();
        injectBundles();
        browserSync.reload();
        done();
    })
}

function hotReload() {
    browserSync.init({
        server: {
            baseDir: './dist',
        },
        single: true
    })
}

module.exports = {
    watchJs,
    watchSass,
    watchHtml,
    watchTemplates,
    hotReload
}
