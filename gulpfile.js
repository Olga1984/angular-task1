const { series, parallel } = require('gulp');
const { compileJs, compileSass, injectBundles } = require('./gulp/build');
const { watchJs, watchSass, hotReload } = require('./gulp/hotReload');

exports.default = series(
    parallel(
        compileJs,
        compileSass
    ),
    injectBundles,
    parallel(
        watchJs,
        watchSass,
        hotReload
    )
);
