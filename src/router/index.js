import Vue from 'vue'
import Router from 'vue-router'
import chat from '@/page/chat'
import friends from '@/page/friends'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: friends
    },
    {
      path: '/chat',
      component: chat
    },
    {
      path: '/friends',
      component: friends
    }
  ],
  linkActiveClass: 'active'
})
router.push({path: '/chat'})
export default router
