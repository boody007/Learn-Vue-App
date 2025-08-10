import { createRouter, createWebHistory } from 'vue-router'
const AboutView = () => import('../views/About.vue')
const HomeView = () => import('../views/Home.vue')

const routes = [
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
