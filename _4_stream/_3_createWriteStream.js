console.log(__dirname);

// FS 
const fs = require('fs');

// Dosya Adı 
const dosyaAdi='yazilacakDosya.txt';

// WRITE STREAM
const writeStream = fs.createWriteStream(dosyaAdi);

//YAZ 
writeStream.write(__dirname+"\n2.satır");

// END
writeStream.end();


// FINISH
writeStream.on('finish',()=>{
    console.log("Yazma İşlemi Tamamdır");
});

// ERROR
writeStream.on('error',(err)=>{
    console.log("Hata oluştu");
    console.error(err);
    console.error(err.message);
});