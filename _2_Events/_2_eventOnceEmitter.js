// once: sadece 1 kere çalışır.

// 1-) Event Create
const myEventOnce= require('events');

// 2-) Emitter Create 
const myEmitterOnce= new myEventOnce.EventEmitter();

// 3-) Event Name 
const eventSpecialDatabase='database';

// 4-) Event Listener 
myEmitterOnce.once(eventSpecialDatabase,()=>{
    console.log("Once Çalıştı-1");
});

// 5-) Event Trigger 
myEmitterOnce.emit(eventSpecialDatabase);
myEmitterOnce.emit(eventSpecialDatabase);
myEmitterOnce.emit(eventSpecialDatabase);

// Belli zaman aralığında çalışsın
setInterval(()=>{
    myEmitterOnce.emit(eventSpecialDatabase);
},1000);

// node _2_eventOnceEmitter
// node _2_eventOnceEmitter.js

// nodemon _2_eventOnceEmitter
// nodemon _2_eventOnceEmitter.js

