console.log(__dirname);

// FILE DELETE 
const fs=require('fs');

// Dosya Yolu
const dosyaYolu='yeniDosya2.txt';

fs.unlink(dosyaYolu,(err)=>{

    // Hata varsa
    if(err){
        console.log("Dosya Silinemedi");
        throw err;
        //return;
    }else{
        console.log(dosyaYolu+' Dosya Başarıyla Silindi');
    }
});