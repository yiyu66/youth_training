const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')


/**
 * 加载器
 * @param {*} dir 扫描的文件夹
 * @param {*} cb 回调方法
 */
function load (dir, cb) {
    const url = path.resolve(__dirname, dir)
    const files = fs.readdirSync(url)
    files.forEach(filename => {
        filename = filename.replace('/.js', '')
        const file = require(url + '/' + filename)
        cb(filename, file)
    });
}
// 模型加载器
const loadModel = config => app => {
    mongoose.connect(config.db.options)
    const conn = mongoose.connection
    conn.on('error', () => {
        console.error('数据库加载失败');
    })
    app.$model = {}  //初始化
    load('../model', (filename, { schema }) => {
        console.log('load model' + filename, schema);
        app.$model[filename] = mongoose.model(filename, schema)
    })// 这里是把那个文件中的schema直接解构出来
}

module.exports = {
    loadModel
}