import Vue from 'vue';
import VueRouter from 'vue-router';
import Routes from '../vue/vueRoutes.js';
import MainHeader from '../vue/MainHeader.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

export default {
  init() {
    new Vue({
      el: '#app',
      router: router,
      components: {
        MainHeader
      }
    });
  }
};
