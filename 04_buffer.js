// 二进制
// 比如图片切割合并，js处理不了
// 视频压缩，调底层硬件POS

// utf-8 可能使用1-6个字节表示

const buffer1 = Buffer.alloc(10)
console.log(buffer1); //<Buffer 00 00 00 00 00 00 00 00 00 00>

const buffer2 = Buffer.from('a')
console.log(buffer2); //<Buffer 61>

const buffer3 = Buffer.from('中')
console.log(buffer3); // <Buffer e4 b8 ad>

const buffer4 = Buffer.concat([buffer2,buffer3])
console.log(buffer4,buffer4.toString()) //<Buffer 61 e4 b8 ad> a中