const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: (process.env.NODE_ENV === 'development') ? '/tb-app/' : '/tb-app/',
  chainWebpack: config => {
    // 修改eslint-loader设置
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .tap(options => {
        options.fix = true // 开启自动修复
        options.formatter = require('eslint-friendly-formatter')
        return options
      })
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        // target: 'http://192.168.1.5:7001',
        // target: 'http://116.62.214.202:7001',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: config => {
    
    config.resolve = {
      alias: {
        "@": resolve("src")
      }
    }

    if (process.env.NODE_ENV === 'production') {
      // 为开发环境修改配置...
      config.devtool = false
    } else {
      // 为开发环境修改配置...
      config.devtool = 'source-map'
    }
  }
}
