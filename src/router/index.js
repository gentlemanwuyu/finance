import Vue from 'vue'
import VueRouter from 'vue-router'

// 组件懒加载
const Home = () => import("../views/Home")

Vue.use(VueRouter)

  const routes = [
    {path: '/', name: 'Home', component: Home}
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
