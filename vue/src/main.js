import Vue from 'vue'
// import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './routes/Home.vue';
import Foo from './routes/Foo.vue';
import Bar from './routes/Bar.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
});

new Vue({
  methods: {
    afterEnter: function(el){
      var delay = 0;
      [].forEach.call(el.getElementsByTagName('li'),(el) => {
        setTimeout(() => {
          el.classList.remove("hide");
        },delay);
        delay += 100;
      });
      el.classList.remove("slide-effect-enter-end");
    },
    beforeEnter: function(el){
      [].forEach.call(el.getElementsByTagName('li'),(el) => {
          el.classList.add("noanim");
          el.classList.add("hide");
          setTimeout(() => {
            el.classList.remove("noanim");
          },1);
      });
    },
    enter: function (el, done) {

      var delay = 300;

      delay += document.querySelectorAll('.slide-effect-leave-active li').length * 100;

      setTimeout(() => {
        el.classList.add("slide-effect-enter-end");
        
        setTimeout(() => {
          let delay = 0;

          [].forEach.call(el.getElementsByTagName('li'),(el) => {
            setTimeout(() => {
              el.classList.remove("hide");
            },delay);
          
            delay += 100;
          });

          setTimeout(done,500);
        },500);
      },delay);


    },
    leave: function (el, done) {
      var delay = 0;
      [].forEach.call(el.getElementsByTagName('li'),(el) => {
        setTimeout(() => {
          el.classList.add("hide");
        },delay);
        delay += 100;
      });

      // delay += 500;

      setTimeout(() => {
        el.classList.add("slide-effect-leave-end");
        setTimeout(done,800);
      },delay);
    }
  },
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
        <transition name="slide-effect" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter" v-on:leave="leave">
          <router-view class="view"></router-view>
        </transition>
      </div>
    </div>
  `
}).$mount('#app');