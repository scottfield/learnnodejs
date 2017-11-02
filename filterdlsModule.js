const fs = require('fs');
const path = require('path');
module.exports = function(dir, ext, callback) {
    ext = '.' + ext;
    fs.readdir(dir, function(err, list) {
        if (err) {
            return callback(err);
        }
        const filterdList = list.filter(function(name) {
            return path.extname(name) === ext;
        });
        callback(null, filterdList);
    });
}