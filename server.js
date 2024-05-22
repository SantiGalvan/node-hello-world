require('dotenv').config();
const http = require("http");
const port = process.env.PORT;
const host = process.env.HOST;
const title = process.env.TITLE;
const quotes = require('./quotes');

// Funzione
const getRandomNumber = (value) => Math.floor(Math.random() * value)

// Server
const server = http.createServer((req, res) => {
    const value = quotes.length;
    const index = getRandomNumber(value);

    if (req.url === '/favicon.ico') {
        res.writeHead(404);
        res.end();
        return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>

        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" integrity="sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>

    <body>
        <div class="container text-center">
            <h1>${quotes[index].paragraph}</h1>
            <p>${quotes[index].author}</p>
            <a href="" class="btn btn-primary">Nuova frase</a>
        </div>
    </body>

    </html>
    `);
});

server.listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`);
});