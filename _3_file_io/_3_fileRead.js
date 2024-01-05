console.log(__dirname);


// fs (READ)
const fs = require('fs');

// Dosya Yolu
const dosyaYolu = './yeniDosya.txt';

// Dosya Oku (Dikkat : 2 parametre)
fs.readFile(dosyaYolu, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        throw err;
        //return;
    } else {
        console.log("Dosya Iceriği,", data);
    }
})

