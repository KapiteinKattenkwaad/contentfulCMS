import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _5448a092 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _4c5d4503 = () => interopDefault(import('..\\pages\\persons.vue' /* webpackChunkName: "pages_persons" */))
const _49c9c7e9 = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages_services" */))
const _74007b57 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

const scrollBehavior = function() {
      return { x: 0, y: 0 }
    }

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _5448a092,
      name: "about"
    }, {
      path: "/persons",
      component: _4c5d4503,
      name: "persons"
    }, {
      path: "/services",
      component: _49c9c7e9,
      name: "services"
    }, {
      path: "/",
      component: _74007b57,
      name: "index"
    }],

    fallback: false
  })
}
