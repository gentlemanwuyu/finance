module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack:{
    performance: {
      hints:'warning',
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js');
      }
    }
  },
  devServer: {
    https: false,
    open: true,
    proxy: {
      '/api': {
        timeout: 1920000,
        maxConnections: 1000,
        target: process.env.VUE_APP_API_DOMAIN,
        changeOrigin: true,
        pathRewrite: {'^/api': '/api'},
        secure: false,
        // cookieDomainRewrite: {'.eminxing.com': 'localhost'},
        headers: {
          Connection: 'keep-alive',
          'keep-alive': 15
        }
      }
    }
  }
}