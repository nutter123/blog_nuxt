/*
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-11-01 11:14:45
 * @LastEditors  : nut
 * @LastEditTime : 2019-12-20 11:49:03
 */

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '坚果小屋 \u2022 个人博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/scss/elements/element-variables.scss',
    '@/assets/scss/main.scss'
  ],
  router:{
    middleware: ['route']
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/nuxt-axios',
    '@/plugins/animation'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  // axios: {
  //   proxy: true
  // },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
