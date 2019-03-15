import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import('@/components/Welcome.vue')
    },
    {
      path: '/chat',
      name:'Chat',
      component: () => import('@/components/Chat.vue'),
      props: true
    }
  ]
})
