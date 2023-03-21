const fs = require('fs')

console.log('process.cwd() :>> ', process.cwd())

/**
 * Copy file content
 */
const copyFile = async (inputFilepath, outputFilepath) => {
  let content = await fs.readFileSync(inputFilepath, 'utf8')

  await fs.writeFileSync(outputFilepath, content, 'utf8')

  console.log(`✨ file copied from ${inputFilepath} to ${outputFilepath}`)

  return 1
}

async function defaultTask(cb) {
  copyFile(
    `./dist/main.js`,
    './../arena-youtube-feed/extensions/arc-yt-feed/assets/yta-scripts-main.js'
  )
  copyFile(
    './dist/main.css',
    './../arena-youtube-feed/extensions/arc-yt-feed/assets/yta-styles-main.css'
  )

  cb()
}

exports.default = defaultTask
