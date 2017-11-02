const http = require('http');
const url = require('url');
const server = http.createServer(function (req, res) {
  const info = url.parse(req.url, true);
  console.log(JSON.stringify(info));
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const handler = config[info.pathname] || config.default;
  handler(req, res, info);
});
const config = {
  '/api/parsetime': function (req, res, info) {
    const query = info.query;
    if (query.iso) {
      const time = new Date(query.iso);
      const result = {
        'hour': time.getHours(),
        'minute': time.getMinutes(),
        'second': time.getSeconds(),
      };
      res.end(JSON.stringify(result));
    }
    res.end('please send iso time query param');
  },
  '/api/unixtime': function (req, res, info) {
    const query = info.query;
    if (query.iso) {
      const time = new Date(query.iso);
      const result = { 'unixtime': time.getTime() };
      res.end(JSON.stringify(result));
    }
    res.end('please send iso time query param');
  },
  'default': function (req, res) {
    res.end('not support api');
  },
};
server.listen(process.argv[2]);
