require('dotenv').config();
const http = require("http");
const port = process.env.PORT;
const host = process.env.HOST;
const html = process.env.HTML;
const quotes = require('./quotes');
const index = Math.floor(Math.random() * quotes.length) - 1;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>${quotes[index].paragraph}</h1>
    <author>${quotes[index].author}</author>`);
});

server.listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`);
});