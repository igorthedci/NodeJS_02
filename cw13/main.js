// console.clear();

const http = require('http');
const secret =  require('./secret');

const port = 3000;
const pathName = '127.0.0.1';

http.createServer((req, res) => {
    const stsList = JSON.parse('{"students" : ["student1", "student2", "student3"]}');
    if(req.method === "GET") {
        if (req.url === '/admin') {
            res.write('Hello Admin');
        }
        if (req.url === '/students') {
            stsList.students.forEach((student) => {
                res.write(student + '\n');
            });
        }
    }
    if(req.method === "POST") {
        let postData = '';
        req.on('data', (chunk) => {
            postData += chunk;
        });
        req.on('end', () => {
            console.log(postData);
        });
        
    }
    console.log(req.method);
    res.end();
}).listen(port, pathName, () => {
    console.log('start listening...');
});

