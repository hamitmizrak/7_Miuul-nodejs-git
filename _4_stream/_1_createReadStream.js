console.log(__dirname);

// Stream 
const fs = require('fs');

// okunacak Dosya
const dosyaAdi = "./video.mp4"

// CREATE 
const readStream = fs.createReadStream(dosyaAdi);

// Veri okunduğunda tetiklenecek olaylar silsilesi
readStream.on('data', (chunk) => {
    console.log(`Okunan Veri: ${chunk}`);
})

// veri tamamlandıktan sonra 
readStream.on('end', () => {
    console.log("Veri okuma işlemi tamamlandı");
})

// veri okumada hata olursa 
readStream.on('error', (err) => {
    console.error(`Hata meydana geldi ${err.message}`);
})