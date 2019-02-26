const { series, parallel } = require('gulp');
const { lintJs, compileJs, compileSass, injectBundles, bundleTemplates } = require('./gulp/build');
const { watchJs, watchSass, watchHtml, hotReload, watchTemplates } = require('./gulp/hotReload');

exports.default = series(
    bundleTemplates,
    parallel(
        lintJs,
        compileJs,
        compileSass
    ),
    injectBundles,
    parallel(
        watchJs,
        watchSass,
        watchHtml,
        watchTemplates,
        hotReload
    ),
);
