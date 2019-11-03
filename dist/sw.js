importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/14cd7bda6d9da6372071.js",
    "revision": "2620f03959967384c782d7057356c37b"
  },
  {
    "url": "/_nuxt/2627994822ae55622294.js",
    "revision": "e4b1004ab2c8ee2070a78745461b1767"
  },
  {
    "url": "/_nuxt/4a4bdeb495ce6738b6f9.js",
    "revision": "9a555c0d930d1e0fe05bd35efcc5bb13"
  },
  {
    "url": "/_nuxt/4bb053b2f110b2507133.css",
    "revision": "6aa18cb568d0fb983ea250f70286de3c"
  },
  {
    "url": "/_nuxt/776d7dbde238e1e1035c.css",
    "revision": "958e6c0aec193af799e59806d9be221d"
  },
  {
    "url": "/_nuxt/78594f811f74a2193aac.js",
    "revision": "79e96a8b33c923af8b0f868362a1d3a3"
  },
  {
    "url": "/_nuxt/905237b54b474c9b6160.css",
    "revision": "618100f3d1323b1a4c06cb5da371ba11"
  },
  {
    "url": "/_nuxt/9ce817d1be92d0107f11.js",
    "revision": "410273ac1202d9f31504824b62185800"
  },
  {
    "url": "/_nuxt/a7d026e6650814292e0b.js",
    "revision": "2348ddf4121e5c899b88548059ce42d8"
  },
  {
    "url": "/_nuxt/be40de9fe2e7ec240ee1.css",
    "revision": "caa636a8fad54fdab008ac1f2286258f"
  },
  {
    "url": "/_nuxt/d4451ee862867eaf7cff.js",
    "revision": "7482f869310c2793bc1c64d489c59277"
  },
  {
    "url": "/_nuxt/dc30d793147c43cc67c9.css",
    "revision": "c377189f92e65f377c5cf7471b3bba44"
  },
  {
    "url": "/_nuxt/e3d9f4eb8618de56b0f8.js",
    "revision": "49b23d96dfb32d8e52db1c000d50a6a0"
  },
  {
    "url": "/_nuxt/e8078c1a73967c78f601.css",
    "revision": "b73fd55b46c59baf26f735a5cc35788f"
  }
], {
  "cacheId": "nuxt-contentful-starter",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
