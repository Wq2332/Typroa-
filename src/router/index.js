import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login/login.vue'
import Main from '@/views/Main.vue';
import Home from '@/views/Home/Home.vue';
import Mall from '@/views/Mall/Mall.vue';
import User from '@/views/User/User.vue';
import Page1 from '@/views/Other/PageOne.vue';
import Page2 from '@/views/Other/PageTwo.vue';
import Setting from '@/views/Setting/Setting.vue'
Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: Main,
      name: 'Main',
      redirect: '/home',
      children: [
              {
              path: '/home',
              name: 'home',
              component: Home
          }, {
              path: '/mall',
              name: 'mall',
              component: Mall
          }, {
              path: '/user',
              name: 'user',
              component: User
          }, {
              path: '/page1',
              name: 'page1',
              component: Page1
          }, {
              path: '/page2',
              name: 'page2',
              component: Page2
          }, {
              path: '/setting',
              name: 'setting',
              component: Setting
          }
      ]
  }, {
      path: '/login',
      name: 'login',
      component: Login
  }],
})

export default router
