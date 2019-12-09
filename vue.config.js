module.exports = {
    // 选项...
    publicPath: '/',
  
    //是否开启eslint校验
    lintOnSave: false,
  
    devServer: {
      disableHostCheck: true,
      host: '0.0.0.0',
      proxy: { //配置代理，解决跨域请求后台数据的问题
        '/api': {
          target: 'http://192.9.200.238:9088', //后台接口
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
  }
  