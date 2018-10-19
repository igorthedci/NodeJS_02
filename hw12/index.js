
const aHusband = require("./modules/husband").NewHusband;
const fs = require("fs");
const logFile = "./logs/husband.log";

aHusband.setSalary(1000);
//console.log(aHusband.getSalary());
aHusband.setFriends(['Bob', 'John', 'Ana']);
//console.log(aHusband.getFriends());
aHusband.setDrunk(true);
//console.log(aHusband.getDrunk());


try {

    console.log('Logging husband status...');
    fs.writeFileSync(logFile, 'Status of the husband:\n');
    console.log('Logging husband salary...');
    fs.appendFileSync(logFile, aHusband.getSalary());
    console.log('Logging husband friends...');
    fs.appendFileSync(logFile, aHusband.getFriends());
    console.log('Logging drunk status...');
    fs.appendFileSync(logFile, aHusband.isDrunk());
    console.log('Log is completed.');

} catch (error) {
    console.log('error');
}

console.log('Program completed.');
