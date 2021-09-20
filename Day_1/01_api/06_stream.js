const fs = require('fs')
// copy一个png图片  
// 如果全部读到内存中会很慢


const rs = fs.createReadStream('./1.png')//相当于引出了一个导出管 

const ws = fs.createWriteStream('./2.png')//相当于引出了一个导入管 

rs.pipe(ws) // 连接导管
