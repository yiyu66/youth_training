const { promisify } = require('util')
module.exports.clone = async function (repo, desc) {
    // 搞一个进度条
    // const download = promisify(require("downlo"))
    const download = promisify(require('download-git-repo'))
    // const ora = require('ora')
    await download(repo, desc)
}
