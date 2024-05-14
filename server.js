// Utwórz prostą aplikację serwerową w Node.js w zmiennej o nazwie **server.js**, która nasłuchuje na porcie 3000 i zwraca "Witaj, świecie!" na żądanie GET do głównego ścieżki (/).

module.exports = server;


const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Witaj, swiecie!');
}).listen(3000);