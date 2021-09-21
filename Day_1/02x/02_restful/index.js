const Koa = require('koa')
const app = new Koa()
// 读到一个模型，自动生成crud接口
// 从keystoneJS中学习 低代码


// 注册路由
const config = require('./conf')
const { loadModel } = require('./framework/loader.js')
loadModel(config)(app)

// 
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
const restful = require('./framework/router')
app.use(restful)

app.listen(3000, () => {
    console.log("server at 3000");
})