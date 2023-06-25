const fs = require('fs')

/**
 * Update shopify scopes from .env file into shopify.app.toml file
 */
const updateScopes = async () => {
  let envFilepath = `${process.cwd()}/.env`
  let shopifyAppTomlFilepath = `${process.cwd()}/shopify.app.toml`

  let envContent = fs.readFileSync(envFilepath, 'utf8')
  let shopifyAppTomlContent = fs.readFileSync(shopifyAppTomlFilepath, 'utf8')

  let envScopes = envContent.match(/^SCOPES=([\S]+)$/gm)[0].replace('SCOPES=', '')
  let shopifyAppTomlScopes = shopifyAppTomlContent
    .match(/^scopes = "([\S]+)"$/gm)[0]
    .replace(/scopes = /gm, '')
    .replace(/"/gm, '')

  if (envScopes !== shopifyAppTomlScopes) {
    shopifyAppTomlContent = shopifyAppTomlContent.replace(shopifyAppTomlScopes, envScopes)

    await fs.writeFileSync(shopifyAppTomlFilepath, shopifyAppTomlContent, 'utf8')
    console.log(`✨ shopify app toml scopes updated`)
  }

  return 1
}

/**
 * Create temp directory
 */
const createTempDirectory = async (filepath) => {
  if (fs.existsSync(filepath)) {
    fs.rmSync(filepath, { recursive: true, force: true })
  }

  fs.mkdirSync(filepath)

  return 1
}

async function defaultTask(cb) {
  updateScopes()

  createTempDirectory(`${process.cwd()}/web/temp`)
  createTempDirectory(`${process.cwd()}/web/uploads`)

  cb()
}

exports.default = defaultTask
