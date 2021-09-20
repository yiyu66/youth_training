//路由
// 读文件关系
// 拼代码 模板渲染的方式
const fs = require('fs')
const chalk = require('chalk')
const handlebars = require('handlebars')

module.exports = async () => {
    // 获取列表
    const list = fs.readdirSync('./src/views')
        .filter(v => v !== "Home.vue")
        .map(v => ({
            name: v.replace(".vue", "").toLowerCase(),
            file: v
        }))

    //生成路由定义
    compile({ list }, './src/router.js', './template/router.js.hbs')
    compile({ list }, './src/App.vue', './template/App.vue.hbs')


    /**
     * 
     * @param {*} meta 
     * @param {*} filePath 
     * @param {*} templatePath 
     */
    function compile (meta, filePath, templatePath) {
        if (fs.existsSync(templatePath)) {
            const content = fs.readFileSync(templatePath).toString()
            const result = handlebars.compile(content)(meta)
            fs.writeFileSync(filePath, result)
            console.log(chalk.green(`${filePath} 创建成功`));
        }
    }





}
