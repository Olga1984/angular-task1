const browserSync = require('browser-sync');
const { compileJs, compileSass } = require('./build');

function watchJs() {
    return gulp.watch('../src/**/*.js', () => {
        compileJs();
        browserSync.reload();
    });
}

function watchSass() {
    return gulp.watch('../src/**/*.scss', () => {
        compileSass();
        browserSync.reload();
    });
}

function hotReload() {
    browserSync.init({
        server: {
            baseDir: '../dist'
        }
    })
}

module.exports = {
    watchJs,
    watchSass,
    hotReload
}
