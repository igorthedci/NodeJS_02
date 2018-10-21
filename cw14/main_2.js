
const http = require('http');

const port = 3000;
const pathName = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.write('CW 14');
    console.log('server created');
    res.end();
});

server.listen(port, pathName, () => {
    console.log('listener on port', port);
    // console.log(global);
    console.log(__dirname);
});
