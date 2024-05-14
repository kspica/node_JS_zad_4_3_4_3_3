// Utwórz serwer HTTP w zmiennej o nazwie **server2.js**, który nasłuchuje na porcie 4000. Serwer powinien obsługiwać dwie ścieżki: / powinna zwracać "Strona główna", a /about powinna zwracać "O nas". W przypadku innej ścieżki strona powinna zwracać status 404.



module.exports = server2;

var http = require('http');

const server2 = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Strona glowna');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('O nas');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Nie znaleziono');
    }
}).listen(4000);