const fs = require('fs-extra')
const path = require('path')
const CONFIG = require('./config')

const appPath = process.cwd()

function build (args, buildConfig = {}) {
  const { type, watch } = buildConfig
  const outputPath = path.join(appPath, CONFIG.OUTPUT_DIR)
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath)
  } else {
    fs.emptyDirSync(outputPath)
  }
  buildForWeapp({ watch })
}

function buildForWeapp ({ watch }) {
  require('./weapp').build({ watch })
}

module.exports = build