const fs = require('fs')

// 同步读取

// 异步读取
// 第一个参数一定是err，称为错误优先的回调
fs.readFile('./conf.js',(err,data)=>{
 if (err) throw err;
 console.log(data.toString());
})

// 争取使用promise api async/await 
// 方法一，这样引入后都是promises
const fs = require('fs').promises
// 方法二 直接用promisify封装一下
(async ()=>{
    const fs = require('fs')
    const {promisify} = require('util')
    const readFile = promisify(fs.readFile)
    const data = await readFile('./conf.js')
    console.log(data.toString());
})