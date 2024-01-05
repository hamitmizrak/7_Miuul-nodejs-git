console.log(__dirname);

// FILE WRITER (1.YOL)
/*
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
*/

// FILE WRITER (2.YOL)
// createWriteStream: Daha büyük dosyaları parça parça yazmak istersek bunu kullanırız.
const fs = require('fs')
// Dosya yolu ve içeriği
const dosyaYolu = 'yeniDosya2.txt';

// Yazma Akışı olutur 
const yazmaAkisi=fs.createWriteStream(dosyaYolu,{encoding:'utf8'});

yazmaAkisi.write('Bu dosya Yeni oluşturuldu\n2.satır ')
yazmaAkisi.end();

console.log(dosyaYolu+ "yeni oluşturuldu");