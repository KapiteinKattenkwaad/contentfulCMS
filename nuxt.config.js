/**
 * Import package.json to get
 * basic package informations
 * */
import dotenv from 'dotenv'
import pkg from './package'
dotenv.config()

/**
 * Configure contentful info as env variables
 * to access them inside Nuxt
 */
const env = {
  CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
}

export default {
  // Define the project ENV variables
  env,

  // Set the build mode
  mode: 'universal',

  /**
   * PWA Manifest file generation
   */
  manifest: {
    short_name: 'Nuxt Contentful Starter',
    name: 'Nuxt Contentful Starter',
    icons: [
      {
        src: 'apple-touch-icon.png',
        type: 'image/png',
        sizes: '512x512'
      }
    ],
    start_url: '/?utm_source=homescreen',
    background_color: '#FFFFFF',
    theme_color: '#ffffff',
    display: 'standalone'
  },

  /*
   ** Default header tags for pages
   */
  head: {
    title: pkg.name,
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover'
      },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/img/icons/apple-touch-icon.png' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['modern-normalize/modern-normalize.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/contentful'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],

  /* Force scroll-top when route change */
  router: {
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /**
     * Extract CSS chunks instead to embed them inside
     * the document. Set false to avoid HTTP requests.
     */
    extractCSS: true,
    /**
     * Configure PostCSS plugins
     */
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        /* More info at https://easings.net/# */
        'postcss-easings': {},
        /* More info at https://github.com/postcss/postcss-url */
        'postcss-url': {},
        /* More info at https://github.com/TrySound/postcss-easy-import */
        'postcss-easy-import': {
          extensions: '.pcss'
        },
        /* More info at https://cssnano.co/ */
        cssnano: {
          preset: [
            'default',
            {
              autoprefixer: false
            },
            {
              discardComments: {
                removeAll: true
              }
            }
          ]
        },
        /* More info at https://github.com/postcss/postcss-reporter */
        'postcss-reporter': {
          clearReportedMessages: true
        }
      },
      // Change the postcss-preset-env settings
      preset: {
        stage: 0,
        autoprefixer: {
          grid: true
        }
      }
    },
    /**
     * Extend webpack configuration
     */
    extend(config) {
      if (process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
