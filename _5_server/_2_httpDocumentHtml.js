console.log(__dirname);

// SERVER OBJECT
const serverObject = {
    port: 3333,
    host: 'localhost',
    statusCode: {
        ok: 200,
        created: 201,
        notFound: 404,
    }
}

// HTML OBJECT
const html = `
<html>
    <head>
        <title>Node js Document Server</title>
    </head>
    <body>
        <h1>Merhabalar Node JS</h1>
    </body>
</html>
`;

// Module HTTP
const http = require('http');

// Server Intance
const server = http.createServer((request, response) => {

    // HEADER
    // response.writeHead(200,{'content-type':'text/plain; charset=utf-8'});
    // response.writeHead(200,{'content-type':'application/json; charset=utf-8'});
    response.setHeader('Content-Type', 'text/html; charset=utf-8');


    console.log("Create Server Çalıştı");



    // END
    //response.write("<mark><b>Html Document</b></mark>")
    response.write(html)
    response.end();
}) //end server 


// SUNUCU 
server.listen(serverObject.port, () => {
    console.log(`Sunucu http://${serverObject.host}:${serverObject.port} adresinde yayın yapıyor`);
});
