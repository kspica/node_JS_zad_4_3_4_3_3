// Utwórz serwer HTTP w zmiennej **server3.js**, który nasłuchuje na porcie 5000. Serwer powinien obsługiwać ścieżkę /data, zwracając dane w formacie JSON: { "message": "Witaj, to są dane!" }.


module.exports = server3;


var http = require('http');

const responseData = { "message": "Witaj, to są dane!" }

const server3 = http.createServer((req, res) => {
    if (req.url === '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const jsonContent = JSON.stringify(responseData);
        res.end(jsonContent);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Nie znaleziono');
    }
}).listen(5000);