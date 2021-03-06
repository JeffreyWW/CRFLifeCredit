import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Wallet from '@/components/Wallet'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: Wallet
    }
  ]
})
