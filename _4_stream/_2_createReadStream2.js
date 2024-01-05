console.log(__dirname);

// Stream 
const fs= require('fs');

// okunacak dosya
const dosyaAdi='./video.mp4'

// Create
const readStream=fs.createReadStream(dosyaAdi);

// Sum 
let sum=0;

// Veri okuduğunda tetiklenecek olaylar silsilesi
readStream.on('data',(value)=>{
console.log('okunan veri: '+value.length);
sum=sum+value.length;
//sum+=value.length;
}); //end data


// Veri tamamlandıktan sonra
readStream.on('end',()=>{
console.log("veri tamamlandı End ");
console.log("Toplam Byte: "+sum);
}) //end end


// Close
readStream.on('close',()=>{
    console.log("kapatıldı close");
})

// Error
readStream.on('error',()=>{

})