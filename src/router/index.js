import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import City from '@/page/cityrouter/city'
import Detail from '@/page/detail/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/cityrouter',
      name: 'city',
      component: City
    },{
      // 动态路由
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
