const webpack = require('webpack');

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Best drones of 2020',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keyword', name: 'keyword', content: 'drones,UAV,best drones'},
      { hid: 'description', name: 'description', content: 'Best drone 2020: fly, shoot 4K video and grab hi-res photos with the best drones' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  render: {
      resourceHints: false,
  },
  server: {
    port: 3010, // default: 3000
    host: '127.0.0.1' // default: localhost,
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~/assets/css/init.scss"
  ],

  loading: '~/components/loading.vue',
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    
  ],
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: ''
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: ''
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
  ],

  router: {
    prefetchLinks: false
  },
  styleResources: {
    scss: './assets/css/variables.scss',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery'
      })
    ],
    extractCSS: {
      allChunks: true
    }
  }
}
