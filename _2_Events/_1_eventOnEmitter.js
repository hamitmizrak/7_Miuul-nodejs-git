// Node js: Event-Driver 
// Bir olay olsun ve bu olayın arkasında özel birşeyler tetiklensin(trigger)
// Olay (Event) Dinleyiciler(Listening)


// 1- Event Module Create 
const myEvent= require('events');

// 2- Emitter Create 
const myEmitter= new myEvent.EventEmitter();


// 3- Olay adı
const eventSpecialDataCreate="fileCreate";

// 4- Event Listener Create
myEmitter.on(eventSpecialDataCreate,()=>{
    console.log("File Created Data 11");
});

// 5- Event Trigger 
myEmitter.emit(eventSpecialDataCreate);
myEmitter.emit(eventSpecialDataCreate);
myEmitter.emit(eventSpecialDataCreate);

// Belli zaman aralığında çalışsın
setInterval(()=>{
    myEmitter.emit(eventSpecialDataCreate);
},2000);

// node _1_eventOnEmitter
// nodemon _1_eventOnEmitter