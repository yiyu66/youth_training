
const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const {clone} = require('./download')
const log = content => console.log(chalk.green(content))
const open = require('open')

const spawn = async(...arg)=>{
    // 同步promise api
    const {spawn} = require('chiled_process')
    return new Promise(resolve=>{
        const proc = spawn(...args)
        // 输出流 子进程 合并到主进程
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('close',()=>{
            resolve()
        })
    })
}
module.exports = async name => {
    // 打印欢迎界面,花里胡哨一点的字体可以在这里找https://www.npmjs.com/package/figlet

    clear()
    const data = await figlet('67373 UPUP!', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    })
    log(data)

    spawn('npm',['install'])


    // 
    log('创建项目' + name)
    await clone('github:su37josephxia/vue-template',name)

    // log('安装依赖')
    log(
        chalk.green(`
        安装完成
        to get start:
        =====================
            cd ${name}
            npm run serve
        ====================
        `)
    )
    open('http://localhost:8080/')
    await spawn('npm',['run','serve'],{cwd:`./${name}`})

}
