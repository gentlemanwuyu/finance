import Vue from 'vue'
import VueRouter from 'vue-router'

// 组件懒加载
const Home = () => import("../views/Home")
const ContinuedStrong = () => import("../views/kline/ContinuedStrong")

Vue.use(VueRouter)

  const routes = [
    {path: '/', name: 'Home', component: Home, beforeEnter: (to, from, next) => {
      next()
    }},
    {path: '/kline/continued-strong', name: 'ContinuedStrong', component: ContinuedStrong},
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
