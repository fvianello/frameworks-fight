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


new Vue({
  router,
  template: `
    <div id="app"> 
      <div id="menu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/foo">Foo</router-link></li>
          <li><router-link to="/bar">Bar</router-link></li>
        </ul>
      </div>
      <div id="page">
        <h1>Basic</h1>
        <transition name="slide-effect">
          <router-view class="view"></router-view>
        </transition>
      </div>
    </div>
  `
}).$mount('#app')