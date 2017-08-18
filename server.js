const Nuxt = require('nuxt')
const express = require('express')
const app = express()
const axios = require('axios')
// const router = express.Router()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const api = require('./config/server')
process.noDeprecation = true

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('./nuxt.config.js')
config.dev = api && api.baseUrl.indexOf('test') > -1

app.use('/get', function(req, res) {
    // res.redirect(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${api.appId}&redirect_uri=${req.query.url}&response_type=code&scope=snsapi_userinfo&state=ydd#wechat_redirect`)

    //  转发
    axios.get()
    .then(function(data) {
        // res.setEncoding('utf8')
        console.log(data.data)
        res.json(data.data)
    })
    .catch(function(error) {
        console.log(error)
    })
})

// Init Nuxt.js
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// Build only in dev mode
// if (config.dev) {
nuxt.build()
    .catch((error) => {
        // eslint-disable-line no-console
        console.error(error)
        process.exit(1)
    })
// }

// Listen the server
// app.listen(port, host)
app.listen(port, '0.0.0.0')
// eslint-disable-line no-console
console.log(`Nuxt.js SSR Server listening on ${host} : ${port}, at ${new Date().toLocaleString()}`)
