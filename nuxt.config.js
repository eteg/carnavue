const webpack = require('webpack')

module.exports = {
  // HEAD
  head: {
    title: 'carnavue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // CSS
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],

  // PLUGINS
  plugins: [
    '~plugins/filters.js',
    '~plugins/bootstrap.js'
  ],

  // LOADING
  loading: { color: '#3B8070' },

  // BUILD
  build: {
    vendor: ['axios', 'vue-axios'],
    plugins: [
      new webpack.ProvidePlugin({
        jquery: 'jquery',
        $: 'jquery',
        jQuery: 'jquery'
      })
    ],
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
