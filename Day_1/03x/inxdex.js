const http = require('http')

http.createServer((req, res) => {
    console.log('cookie', req.headers.cookie);
    res.setHeader('Set-Cookie', 'abc=123')
    res.end('hello')
}).listen(3000, () => {
    console.log('http://localhost:3000/');
})