
const ClassHusband = require("./modules/husband_2").Husband;
const logFile = "./logs/husband.log";
const fs = require("fs");

let aHusbandFirst = new ClassHusband('Bob');
let aHusbandSecond = new ClassHusband('John');
// aHusband.setSalary(1000);

console.log(aHusbandFirst.getStatus());
console.log(aHusbandSecond.getStatus());
aHusbandFirst.workday();
aHusbandFirst.workday();
aHusbandFirst.workday();
aHusbandFirst.workday();
aHusbandFirst.workday();
console.log(aHusbandFirst.getStatus());
console.log(aHusbandSecond.getStatus());
aHusbandFirst.weekend('Boris');
console.log(aHusbandFirst.getStatus());
console.log(aHusbandSecond.getStatus());

try {

    console.log('Creating new log file...');
    fs.writeFileSync(logFile, "new husband log." + '\n');
    console.log('Logging husband status...');
    fs.appendFileSync(logFile, aHusbandSecond.getStatus() + '\n');
    console.log('Logging husband workday...');
    aHusbandSecond.workday();
    fs.appendFileSync(logFile, aHusbandSecond.getStatus() + '\n');
    console.log('Logging husband weekend...');
    aHusbandSecond.weekend('Bill');
    fs.appendFileSync(logFile, aHusbandSecond.getStatus() + '\n');
    console.log('Logging husband new workday...');
    aHusbandSecond.workday();
    fs.appendFileSync(logFile, aHusbandSecond.getStatus() + '\n');
    console.log('Log is completed.');

} catch (error) {
    console.log('error');
} finally {
    console.log('Program completed.');
}
