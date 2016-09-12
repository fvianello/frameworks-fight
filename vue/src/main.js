import Vue from 'vue'
// import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})

import Menu from './Menu.vue';

new Vue({
  router,
  template: `
    <div id="app">
      <h1>Basic</h1>
      <Menu></Menu>
      <transition name="fade">
        <router-view class="view"></router-view>
      </transition>
    </div>
  `,
  components:{
    Menu
  }
}).$mount('#app')