// console.clear();
// console.log("HI")

const DO = require('./modules/do');

DO.doS();
DO.doS(5);
DO.doS(15);
DO.doS(22);


// const elem ;
// elem.addEventLinstener('click', ()=>{})

// const events = require('events');
// const emitter = new events();
// const active = 'WakeUp';
// const sleep = 'Sleep';

// emitter.on(active, function(e){
//     console.log('Woke up.');
// });

// emitter.on(sleep, function(e){
//     console.log('Went to bed.');
// });

// const hours = new Date().getHours();
// emitter.emit(hours < 8 ? sleep : active);

// const events = require('events');
// const emitter = new events();
// const eventName = 'WakeUp';

// emitter.on(eventName, function(e){
//     console.log('Woke up');
// });

// emitter.emit(eventName);

// const fs = require('fs');    // 'fs' - имя встроенного модуля

// fs.unlink('./texts/1.1', (err) => {
//     try {
//         if (err) {
//             throw(err);
//         }
//         console.log('file is deleted.');

//     } catch(e) {
//         console.log(e.path, 'file not found');
//     }
// });

//const str = fs.readFileSync('guide.txt', 'utf8');
// const str = fs.readFile('guide.txt', 'utf8', function(err, data) {
//     if (err) {
//         throw err;
//     }
//     console.log('File reading has been completed.');
//     console.log(data);
//     return data;
// });

// console.log(str);


// //const str = 'hi text'
// const str = 'hi text'
// writeFile('test.txt', str, function(err), function(err, data) {
//     if (err) {
//         throw err;
//     }
//     console.log('File reading has been completed.');
//     console.log(data);
//     return data;
// } {
//     if (err) {
//         throw err;
//     }
//     console.log('file is written!!');
// });

console.log('Code is finished!!');
