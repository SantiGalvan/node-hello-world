require('dotenv').config();
const http = require("http");
const port = process.env.PORT;
const host = process.env.HOST;
const html = process.env.HTML;
const quotes = require('./quotes');

const server = http.createServer((req, res) => {
    const index = Math.floor(Math.random() * (quotes.length - 1));

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>node-hello-world</title>
    </head>

    <body>
        <h1>${quotes[index].paragraph}</h1>
        <author>${quotes[index].author}</author>
    </body>

    </html>
    `);
});

server.listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`);
});