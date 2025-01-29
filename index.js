const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, world! Server is running on port 6789\n");
});

const PORT = 6789;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
