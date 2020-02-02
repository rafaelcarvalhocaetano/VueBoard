import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'form',
    component: () => import('../views/FormBoard.vue')
  },
  {
    path: '/board',
    name: 'board',
    component: () => import('../views/Board.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
