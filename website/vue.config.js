module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  // see https://github.com/vuejs/vue-cli/issues/2948#issuecomment-438589725
  chainWebpack: config => config.resolve.symlinks(false)
}