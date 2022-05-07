var http = require("http");
var mojModul = require("./vlastitiModulCommonJS");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(mojModul.dajNoviDatum());
    res.write(mojModul.aaa().toString());
    res.end("Hello World!");
  })
  .listen(8080);
