import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login'
import Manage from './components/manage'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
  {
    path: '/',//登录页面的路由要定义为/，这样在项目运行时就可以直接加载
    name: 'login',
    component: Login
  },
  {
      path: '/manage',
      name: 'manage',
      component: Manage
  },
]
})
