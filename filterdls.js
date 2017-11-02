const fs = require('fs');
const path = require('path');
const ext = '.' + process.argv[3];
fs.readdir(process.argv[2], function(err, list) {
    if (err) {
        console.log(err);
        return;
    }
    const filterdList = list.filter(function(name) {
        return path.extname(name) === ext;
    });
    filterdList.forEach(function(name) {
        console.log(name);
    });
});