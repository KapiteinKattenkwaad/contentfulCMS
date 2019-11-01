importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute(
  [
    {
      url: '/_nuxt/4e96604b9b6faa7b33a6.js',
      revision: 'e2aae38b97dbbec1af97e2cc08a6186a'
    },
    {
      url: '/_nuxt/5c7c590ac97278736975.js',
      revision: 'b2f0bd0f128620021b803baeebfb24bd'
    },
    {
      url: '/_nuxt/88c572ec5f63c2c9cffd.css',
      revision: 'f6f681bc2b60676c866186edc5c8edbf'
    },
    {
      url: '/_nuxt/8e85b9482b53f2f9c803.js',
      revision: '1f0ed6d79399883bd23288b0fb63486b'
    },
    {
      url: '/_nuxt/a7062c21ba920c2ec4cc.css',
      revision: '3bd188049ae953a98683b1d733112773'
    },
    {
      url: '/_nuxt/ac5359aa692577b74a53.js',
      revision: 'b2310a708b2d3728f670d9751e2becc4'
    },
    {
      url: '/_nuxt/d6b40f7e1bfdc74fa65b.js',
      revision: '96986c4808b48f6c904bf8c058a86c07'
    },
    {
      url: '/_nuxt/e8078c1a73967c78f601.css',
      revision: 'b73fd55b46c59baf26f735a5cc35788f'
    }
  ],
  {
    cacheId: 'nuxt-contentful-starter',
    directoryIndex: '/',
    cleanUrls: false
  }
)

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(
  new RegExp('/_nuxt/.*'),
  workbox.strategies.cacheFirst({}),
  'GET'
)

workbox.routing.registerRoute(
  new RegExp('/.*'),
  workbox.strategies.networkFirst({}),
  'GET'
)
