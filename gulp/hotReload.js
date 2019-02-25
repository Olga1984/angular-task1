const browserSync = require('browser-sync');
const gulp = require('gulp');
const { compileJs, compileSass, injectBundles, lintJs } = require('./build');

function watchJs() {
    return gulp.watch('./src/**/*.js', done => {
        compileJs();
        lintJs();
        browserSync.reload();
        done()
    });
}

function watchSass() {
    return gulp.watch('./src/**/*.scss', done => {
        compileSass();
        browserSync.reload();
        done()
    });
}

function watchHtml(done) {
    return gulp.watch('./src/index.html', done => {
        injectBundles();
        browserSync.reload();
        done();
    })
}

function hotReload() {
    browserSync.init({
        server: {
            baseDir: './dist',
        }
    })
}

module.exports = {
    watchJs,
    watchSass,
    watchHtml,
    hotReload
}
