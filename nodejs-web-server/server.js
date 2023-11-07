const http = require('http');
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    response.statusCode = 200;

    const { method, url } = request;
    if (url === '/') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>this is home page with method get</h1>');
        }
        else {
            response.statusCode = 400;
            response.end(`<h1>this page cannot be access with ${method} request</h1>`);
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>this is about page</h1>');
        }
        else if (method === 'POST') {
            let body = [];
            request.on('data', (chunk) => {
                body.push(chunk);
            });
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(`<h1>Hello ${name}! this is about page with method ${method}</h1>`);
            });
        }
        else {
            response.statusCode = 400;
            response.end(`<h1>this page cannot be access with ${method} request</h1>`);
        }
    }
    else {
        response.statusCode = 404;
        response.end('<h1>page not found</h1>');
    }
    // else 
    // {
    //     response.end('<h1>page not found</h1>');
    // }

};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});