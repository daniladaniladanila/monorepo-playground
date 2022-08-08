const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, varg)=> {

  console.log(11111, env, varg);
  
  return {
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
    },
    devtool: 'eval',
    plugins: [
      new HtmlWebpackPlugin({
        // If you pass a plain object, it will be merged with the default values
        // (New in version 4)
        // templateParameters: {
        //   'foo': 'bar',
        //   title: 123
        // }, 
        templateParameters: (compilation, assets, assetTags, options) => {
          console.log({
            assets,
            assetTags, 
          });
          console.log({
            a: assetTags.headTags
          });
          return {
            compilation,
            webpackConfig: compilation.options,
            htmlWebpackPlugin: {
              tags: assetTags,
              files: assets,
              options
            },
            'foo': 'bar'
          };
        },
        template: 'index.template.js',
        inject: false
      })
    ]
  }
}