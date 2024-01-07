console.log(__dirname);

// Port
const port=4444;

// File System Module
const fs = require('fs');

// SAYFALAR
const indexPage = './index.html';
const loginPage = './login.html';
const registerPage = './register.html';
const notfoundPage = './notFound.html';

// Express
const express=require('express');
const app=express();

// express Router 
const router=express.Router();

//Anasayfa
router.get('/',(request,response)=>{
    //response.send('Ana sayfa');
    fs.readFile(indexPage, (err, data) => {
        if (err)
            throw err;
        response.end(data);
        //response.write("Anasayfa");
    })
})

// Login
router.get('/login',(request,response)=>{
    //response.send('Login');
    fs.readFile(loginPage, (err, data) => {
        if (err)
            throw err;
        response.end(data);
    })
})

// Register
router.get('/register',(request,response)=>{
    //response.send('Register');
    fs.readFile(registerPage, (err, data) => {
        if (err)
            throw err;
        response.end(data);
    })
})

// Router Ana Uygulamayı Göster
app.use('/',router);

// 404 NotFound
app.use((req,res,next)=>{
    // res.status(404).send('404 Not Found');
    fs.readFile(notfoundPage, (err, data) => {
        if (err)
            throw err;
            res.end(data);
        //response.write("Anasayfa");
    })
})


app.listen(port,()=>{
    console.log(`Sunucu http://localhost:${port} adresinde yayın yapıyor`);
});