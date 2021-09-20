// import { createServer } from 'http';
const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
    // console.log(getProtoChain(request));
    // 这两个都是流，为什么这个是个流？
    console.log('a request');
    response.end('hello!')
    // const { url, method } = request
    // if (url === '/' && method === 'Get') {
    //     fs.readFile('./index.html', (err, data) => {
    //         if (err) {
    //             response.writeHead(500, {
    //                 // 'content-type': 'text/plain'
    //             })
    //             response.end('500 服务器挂了')
    //             return
    //         }
    //         response.statusCode = 200
    //         // response.setHeader('content-type', 'text/plain')
    //         response.end(data)
    //     })
    // } else {
    //     response.statusCode = 400
    //     response.setHeader('content-type', 'text/plain')
    //     response.end('不存在')
    // }
}).listen(8888, () => {
    console.log('http://localhost:8888/');
})





// function getProtoChain (obj) {
//     const protoChain = []
//     while (obj = Object.getPrototypeOf(obj)) {
//         protoChain.push(obj)
//     }
//     return protoChain
// }