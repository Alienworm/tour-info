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
        target: 'http://119.91.234.90:5000/tour',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
  }
};
