console.log(__dirname);

// Server Object
const serverObject = {
    port: 5555,
    host: 'localhost',
    statusCode: {
        ok: 200,
        created: 201,
        notFound: 404,
    }
}

// HTTP Module
const http = require('http');

// File System Module
const fs = require('fs');

// SAYFALAR
const indexPage = './index.html';
const loginPage = './login.html';
const registerPage = './register.html';
const notfoundPage = './notFound.html';

// Http Create
const server = http.createServer((request, response) => {

    //HEADER 
    //response.setHeader('Content-Type','text/html; charset=utf-8');
    // status:200 (Success)
    response.writeHead(serverObject.statusCode.ok, { 'Content-Type': 'text/html; charset=utf-8' });

    // REQUEST 
    if (request.method === 'GET') {
        // ROOT
        if (request.url === '/' || request.url === '/index') {
            fs.readFile(indexPage, (err, data) => {
                if (err)
                    throw err;
                response.end(data);
                //response.write("Anasayfa");
            })
        } else if (request.url === '/login') {
            fs.readFile(loginPage, (err, data) => {
                if (err)
                    throw err;
                response.end(data);
                //response.write("Anasayfa");
            })
            //response.write("Login Ekranı");
        } else if (request.url === "/register") {
            fs.readFile(registerPage, (err, data) => {
                if (err)
                    throw err;
                response.end(data);
                //response.write("Anasayfa");
            })
            // response.write("Register Ekranı")
        } else {
            fs.readFile(notfoundPage, (err, data) => {
                if (err)
                    throw err;
                response.end(data);
                //response.write("Anasayfa");
            })
            //response.write(serverObject.statusCode.notFound + " Sayfa bulunamadı...");
        }
    }

    // END
    //response.end();
}); //end server

// Port
server.listen(serverObject.port, () => {
    console.log(`Sunucu http://${serverObject.host}:${serverObject.port} adresinde yayın yapıyor`);
});