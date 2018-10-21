/*
Homework #13
Создать package.json, 
установить туда nodemailer 
и попробовать отправить самому себе письмо
*/
var nodemailer = require('nodemailer');
const fs = require("fs");
const credFile = "./assets/gmail.json";
let credSource = '';

fs.readFileSync(credFile, credSource);
let credGmail = JSON.parse(credSource);
var transporter = nodemailer.createTransport(credGmail);
    
    var mailOptions = {
      from: 'youremail@gmail.com',
      to: 'foumart@ukr,net',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });