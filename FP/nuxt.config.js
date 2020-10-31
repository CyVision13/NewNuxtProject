export default {

  mode:'universal',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'FP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My Cool web development blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet',href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap"}
    ]
  },
  loading: { color:'#fa923f', height:'4px',duration:5000},
  loadingIndicator:{
    name:'circle',
    color :'#fa923f'
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
