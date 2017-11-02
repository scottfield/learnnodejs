const http = require('http');
const port = process.argv[2];
const map = require('through2-map');
const server = http.createServer(function (req, res) {
  const method = req.method;
  console.log(method);
  if (method !== 'POST') {
    res.setHeader(400, { 'Content-Type': 'text/plain' });
    res.end('not support method');
    return;
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});
server.listen(port);