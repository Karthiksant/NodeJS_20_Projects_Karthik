// program1.js
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World...!');
}).listen(3000, () => {
  console.log('im karthik displayed in powershell only');
});
