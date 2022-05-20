import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/NotFound',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory('/curriculum-vitae/'),
  routes
})


router.beforeEach((to, from, next) => {
    console.log(to, "->", from);
    next();
})


export default router