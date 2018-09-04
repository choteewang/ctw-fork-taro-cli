const fs = require('fs-extra')
const path = require('path')
const CONFIG = require('./config')

const appPath = process.cwd()

async function build (args, buildConfig = {}) {
  console.log('Enjoy -> xcx, 第二步开始, 调用proxy转换JSX, 生成并拆分小程序文件')
  const { type, watch } = buildConfig
  const outputPath = path.join(appPath, CONFIG.OUTPUT_DIR)
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath)
  } else {
    fs.emptyDirSync(outputPath)
  }
  await buildForWeapp({ watch })
}

async function buildForWeapp ({ watch }) {
  let weapp = require('./weapp')
  await weapp.build({ watch })
}

module.exports = build