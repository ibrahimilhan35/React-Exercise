const http = require("http");
const HOSTNAME = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, Ibra!"); // Corrected line
});

server.listen(port, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${port}/`);
});
