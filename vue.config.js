module.exports = {
  lintOnSave: true,
  runtimeCompiler: false,
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/scss/_handle.scss";`
      }
    }
  },
  devServer: {
    hot:true,
    open: true,
    proxy: {
      '/api': {
        target: process.env["VUE_APP_URL"],
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
  }
};
