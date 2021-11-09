var http = require("http");

const httpServer = http.createServer(handleServer).listen(8081);

function handleServer(req, res) {
  const url = req.url;

  if (url === "/welcome") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.send("Welcome to Dominos!");
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, { "content-type": "application/json" });
    res.send({
      phone: "18602100000",
      email: "guestcaredominos@jublfood.com",
    });
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end();
  }
}

module.exports = httpServer;
