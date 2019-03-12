const through = require('through2');
const path = require('path');

module.exports = function stripHtml() {
    function strip(file, enc, cb) {
        const normalized = path.normalize(file.path);
        const stripped = normalized.match(/\w+.html$/)[0];
        file.path = stripped;
        cb(null, file);
    }
    return through.obj(strip);
}
