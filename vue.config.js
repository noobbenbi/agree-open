module.exports = {
    // 选项...
    publicPath: './',
    outputDir:'dist',
    //是否开启eslint校验
    lintOnSave: false,
    assetsDir: 'static',
    devServer: {
      disableHostCheck: true,
      host: '0.0.0.0',
      proxy: { //配置代理，解决跨域请求后台数据的问题
        '/api': {
          target: 'http://192.168.180.154:33333', //后台接口
          ws: true, //是否跨域
          changeOrigin: true,
          pathRewrite: {
            '^/api':'/'
          }
        }
      }
    },
  
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'stylus',
        patterns: []
      }
    },
    pwa: {
      iconPaths: {
        favicon32: 'favicon.ico',
        favicon16: 'favicon.ico',
        appleTouchIcon: 'favicon.ico',
        maskIcon: 'favicon.ico',
        msTileImage: 'favicon.ico'
      }
    },
  }
  