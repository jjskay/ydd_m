var path = require('path')
var fs = require('fs')

var baseUrl = 'https://api.test.yudada.com/'
if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://api.yudada.com/'
}
process.env.NODE_ENV && fs.writeFile('./config/server.json', JSON.stringify({
    baseUrl: baseUrl
}), (err) => {
    if (err) throw err
    console.log('It\'s saved!')
})

module.exports = {
  /*
  ** Headers of the page
  */
    head: {
        title: '鱼大大M站',
        meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { name: 'format-detection', content: 'telephone=no, email=no' },
      { hid: 'description', name: 'description', content: '鱼大大M站' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
  /*
  ** Customize the progress-bar color
  */
    loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
    build: {
    /*
    ** Run ESLINT on save
    */
        extend(config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }

            config.resolve.alias['~config'] = path.join(__dirname, 'config')
        }
    },
    babel: {
        presets: ['es2015', 'stage-2'],
        plugins: [
            'transform-async-to-generator',
            'transform-runtime'
        ],
        comments: true
    }
}
