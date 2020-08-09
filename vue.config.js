module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
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