import Repository from '../repositories/store_setting.js'
import Webhook from './webhook.js'

const Status = {
  INSTALLED: 'INSTALLED',
  RUNNING: 'RUNNING',
  UNINSTALLED: 'UNINSTALLED',
  LOCKED: 'LOCKED',
}
const AppPlan = {
  BASIC: 'BASIC',
  PRO: 'PRO',
  PLUS: 'PLUS',
}
const Permission = {
  NAVIGATION: 'NAVIGATION',
}

const StoreSetting = {
  Status,
  AppPlan,
  Permission,

  uninstall: async (shop) => {
    let storeSetting = await Repository.findOne({ shop })

    if (!storeSetting) return

    storeSetting = await Repository.update(storeSetting.id, {
      status: Status.UNINSTALLED,
      appPlan: AppPlan.BASIC,
      acceptedAt: null,
      webhooks: null,
      scopes: null,
      billings: null,
    })

    console.log('/uninstall storeSetting :>> ', storeSetting)

    return storeSetting
  },

  init: async (session) => {
    const { shop, accessToken, scope: scopes } = session

    let storeSetting = await Repository.findOne({ shop })
      .then((res) => res)
      .catch((err) => null)

    if (!storeSetting) {
      /**
       * Init new store setting
       */
      storeSetting = await Repository.create({
        shop,
        accessToken,
        scopes,
        testStore: process.env.SHOP === shop ? true : false,
      })
    }

    if (storeSetting.accessToken !== accessToken || storeSetting.scopes !== scopes) {
      /**
       * Update store setting if any
       */
      storeSetting = await Repository.update(storeSetting.id, {
        accessToken,
        scopes,
        status: Status.INSTALLED,
      })
    }

    if (storeSetting.webhooks !== process.env.WEBHOOKS) {
      /**
       * Register webhooks
       */
      process.env.WEBHOOKS.split(',').map((topic) => Webhook.register({ shop, accessToken, topic }))

      /**
       * Update store setting webhooks
       */
      storeSetting = await Repository.update(storeSetting.id, {
        webhooks: process.env.WEBHOOKS,
      })
    }

    return storeSetting
  },

  count: async (where) => await Repository.count(where),

  find: async (filter) => await Repository.find(filter),

  findById: async (id) => await Repository.findById(id),

  findOne: async (where) => await Repository.findOne(where),

  create: async (data) => await Repository.create(data),

  update: async (id, data) => await Repository.update(id, data),

  delete: async (id) => await Repository.delete(id),
}

export default StoreSetting
