import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import World from '@/components/World'

Vue.use(Router)

let r = new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/world',
      component: World
    }
  ]
})

r.beforeEach((to, from, next) => {
  console.log('be')
  next()
})

export default r
