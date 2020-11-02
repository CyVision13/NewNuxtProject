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
    '~plugins/core-components.js'
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
    extend(config,ctx){

    }
  },
  //overriden by package.json
  dev: true,
  env:{
    baseUrl:process.env.BASE_URL || 'https://vuejs-f4c7c.firebaseio.com'
  },
  // generate: {

  // }
  

  // it must be roote of node modules 
  // rootDir:'/', // by defualt is /
  
  router: {
    // we can config routes here
    // base:'/my-app/'



    // extendRoutes(routes,resolve){
    //   routes.push({
    //     path:'*',
    //     component: resolve(__dirname,'pages/index.vue')
    //   })
    // }
    

    // give active css class to active links
      linkActiveClass:'active'



  },

  // it must include nuxt folders 
  // srcDir: '/',

  // css for pages
  transition: {
    name: 'page',
    mode:'out-in'
  }
}
