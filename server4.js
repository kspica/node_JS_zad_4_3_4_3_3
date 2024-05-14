// Utwórz serwer HTTP w zmiennej o nazwie server4.js, który nasłuchuje na porcie 6000 i obsługuje ścieżkę /submit. Serwer powinien akceptować żądania POST, w których otrzymuje JSONa, a następnie zwraca ten sam obiekt z dodatkowym kluczem received: true.


module.exports = server4;


const http = require('http');

const server4 = http.createServer((req, res) => {
    if (req.method === 'POST') {
        var body;
        req.on('data', chunk => {
            body = JSON.parse(chunk);
        });
        req.on('end', () => {
            // Teraz mamy dostęp do całego ciała żądania
            Object.assign(body, {
                received: true
            })
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const jsonContent = JSON.stringify(body);
            res.end(jsonContent);
        });
    }
}).listen(4000);