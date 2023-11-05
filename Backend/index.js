const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    switch (req.url){
    case "/":
        res.end("Hello World... ");
        break;
    case "/about":
        res.end("Hi i am Simran")
        break;
    case "/health":
        res.end("Health check passed successfully.")
        break;
    default:
        res.end("404 Not Found")
    }
    
});

server.listen(8080, '127.0.0.1', () => console.log('Server running at http://127.0.0.1:8080/'));
