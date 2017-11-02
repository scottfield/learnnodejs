const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const path = process.argv[3];
const server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    const fileStream = fs.createReadStream(path);
    fileStream.pipe(res);
});
server.listen(port);