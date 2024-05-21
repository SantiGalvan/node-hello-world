require('dotenv').config();
const http = require("http");
const port = process.env.PORT;
const host = process.env.HOST;
const html = process.env.HTML;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>${html}</h1>`);
});

server.listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`);
});