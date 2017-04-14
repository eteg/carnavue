const path = require('path')

module.exports = {
  module: {
    rules: [{
      use: 'vue-loader'
    }]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname)
    }
  }
}
