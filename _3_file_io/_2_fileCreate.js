// __dirname: 
console.log(__dirname);

// fs: File System 
const fs = require('fs')

// Dosya yolu ve içeriği
const dosyaYolu = 'yeniDosya.txt';

// Dosya İçeriği
const dosyaIcerigi = ' Bu dosya yeni oluşturuldu';

// Dosya Oluştur (FILE CREATE) 
fs.writeFile(dosyaYolu, dosyaIcerigi, 'utf8', (err) => {
    //Eğer hata varsa
    if (err) {
        console.error(err);
        throw err;
        //return;
    } else {
        console.log(dosyaYolu + "Dosyanız başarılı bir şekilde oluşturuldu");
    }
})