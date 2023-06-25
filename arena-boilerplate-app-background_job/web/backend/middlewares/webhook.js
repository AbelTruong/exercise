import apiCaller from '../helpers/apiCaller.js'

const Webhook = {
  register: ({ shop, accessToken, topic }) => {
    apiCaller({
      shop,
      accessToken,
      endpoint: `webhooks.json`,
      method: 'POST',
      data: {
        webhook: {
          topic,
          address: process.env.HOST + '/api/webhooks',
          format: 'json',
        },
      },
    })
      .then((res) => console.log(`${shop} webhook ${topic} registered`))
      .catch((err) => console.log(`${shop} register webhook ${topic} failed:`, err.message))
  },
}

export default Webhook
