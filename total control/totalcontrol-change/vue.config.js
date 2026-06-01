const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    devtool: 'source-map'
  },

  devServer: {
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; " +
        "script-src 'self'; " +
        "style-src 'self' 'unsafe-inline'; " +
        "img-src 'self' data:; " +
        "connect-src 'self' ws://localhost:8080 ws://10.220.2.8:8080;"
    }
  }
})