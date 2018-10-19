
const sun = require('./sun.js')
const moon = require('./moon.js')
let innerVar = 0;

console.log(sun);

// function doSomething(hours) {

//     if (hours > 6 && hours < 20) {
//         console.log('show Sun');
//     } else if (hours < 4 || hours > 22) {
//         console.log('show Moon');
//     } else {
//         console.log('show Sun and Moon')
//     }

// };

// module.exports.doSomething = doSomething;

module.exports.doS = function(hours) {

    let heavenItem = '';
    console.log('DO:', ++innerVar);
    if (hours > 6 && hours < 20) {
        heavenItem = sun.name;
        //console.log('DO: show Sun');
    } else if (hours < 4 || hours > 22) {
        heavenItem = moon.name;
        //console.log('DO: show Moon');
    } else {
        //console.log('DO: show Sun and Moon')
        heavenItem = `${sun.name} and ${moon.name}`;
    }
    console.log(heavenItem);
};



