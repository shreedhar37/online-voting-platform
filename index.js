const http = require("http");
//const url = require("url");

const PORT = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end("Hello friend");
  })
  .listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
