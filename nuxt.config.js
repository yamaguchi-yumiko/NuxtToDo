const pkg = require('./package')
const webpack = require('webpack')


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    { src: '~/assets/scss/app.scss' },
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vuejs-datepicker', mode: 'client', ssr: false },
    { src: '~/plugins/vee-validate', ssr: true }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify',
  ],
  styleResources: {
    scss: ['~/assets/scss/_variable.scss'],
  },


  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    },
    babel: {
      compact: true,
    },
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
   ]
  }
}
