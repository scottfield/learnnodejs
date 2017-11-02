const bl = require('bl');
const http = require('http');

function get(url, callback, index) {
    http.get(url, function(response) {
        response.pipe(bl(function(err, data) {
            if (err) {
                return callback(err);
            }
            data = data.toString();
            callback(null, data, index);
        }));
    });
}

function multipleGet(urls) {
    let completedRequest = 0;
    let requestData = [];
    const callback = function(err, data, index) {
        if (err) {
            return console.log(err);
        }
        requestData[index] = data;
        if (requestData.length === urls.length && !requestData.includes(undefined)) {
            requestData.forEach(function(data) {
                console.log(data);
            });
        }
    }
    for (let i = 0; i < urls.length; i++) {
        get(urls[i], callback, i);
    }
}
multipleGet(process.argv.slice(2));