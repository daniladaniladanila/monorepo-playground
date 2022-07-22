const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './ws1/index.js'),
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      chunks: 'all'
    }
  }
}