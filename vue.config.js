module.exports = {
  css: {
    sourceMap: true
  }
}
module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: 'https://login.microsoftonline.com/79fe009c-79e0-4bc9-baec-a76d3145bde5/oauth2/token/',
  }
}