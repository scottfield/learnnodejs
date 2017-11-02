const ls = require('./filterdlsModule');
const dir = process.argv[2];
const ext = process.argv[3];
ls(dir, ext, function(err, data) {
    if (err) {
        console.log(err);
        return;
    }
    data.forEach(function(name) {
        console.log(name);
    });
});