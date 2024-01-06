console.log(__dirname);

// ServerObject
const serverObject = {
    host: 'localhost',
    port: 3333,
    statusCode: {
        ok: 200,
        created: 201,
        notFound: 404,
    }
}

// Http Modül 
const http = require('http');

// Server Oluşturma
const server = http.createServer((request, response) => {
    console.log('Http Server Created');


    // ******** HEADER *******************************************************************************
    // Header (Başlık)
    // response.writeHead(200,{'content-type':'text/html; charset=utf-8'});
    // response.writeHead(200,{'content-type':'text/plain; charset=utf-8'});
    // response.writeHead(200,{'content-type':'application/json; charset=utf-8'});
    response.writeHead(serverObject.statusCode.ok, { "Content-Type": "text/html; charset=utf-8" })

    // ******** REQUEST *******************************************************************************
    // Request Server
    // console.log("************* REQUEST *****************");
    // console.log(request);
    // console.log(request.url);
    // console.log(request.headers);
    // console.log(request.headers.host);

    // ******** RESPONSE *******************************************************************************
    // Response Server
    // console.log("************* RESPONSE *****************");
    // console.log(response);
    response.write('<b>Merhaba</b> Node.js <br/>');

    // Response Sonlandırma
    response.end(`Hoşgeldiniz\nSunucu http://localhost:${serverObject.port} adresinde yayın yapıyor üğşçö`)

}); // end server

// Listen Port 
server.listen(serverObject.port, () => {
    console.log(`Listen http://localhost:${serverObject.port} adresinde yayın yapıyor`);
})