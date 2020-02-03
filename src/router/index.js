import Vue from 'vue';
import VueRouter from 'vue-router';

const _board = () => import('../views/Board.vue');
// const _form = () => import('../views/FormBoard.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/board'
  },
 {
   path: '/board',
   component: _board
 },
//  {
//    path: '/form',
//    name: 'form',
//    component: _form
//  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router
