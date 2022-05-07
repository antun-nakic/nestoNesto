import http from "http";
import { dajNoviDatum, aaa } from "./vlastitiModul.js";
import url from "url";

http
  .createServer(function (req, res) {
    let a = url.parse(req.url, true);
    if (a.path === "/favicon.ico") {
      res.writeHead(404);
      res.end("File not find");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("eeeee");
      //res.write(a.query);
      res.write(dajNoviDatum());
      res.write(aaa().toString());
      res.end("Hello World!");
    }

    console.log(a);
  })
  .listen(8080);
