import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/main/register/register.vue'
import Login from '../views/main/login/login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/index'
  },
  {
    path: '/index',
    beforeEnter: (to, from, next) => {
      let token = window.localStorage.getItem('token')
      if(token && token.split(".").length === 3){
        next()
      }else{
        next('/login')
      }
    },
    component: ()=>import('../views/main/list/index.vue')
  },
  {
    path:'/register',
    name:'register',
    component:Register
  },
  {
    path:'/login',
    name:'login',
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
window.router = routes
export default router
