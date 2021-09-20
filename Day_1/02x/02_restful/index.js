const Koa = require('koa')
const app = new Koa()


// 注册路由

app.listen(3000, () => {
    console.log("server at 3000");
})