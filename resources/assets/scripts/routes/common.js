import Vue from 'vue';
import Home from '../vue/home.vue';
import MainHeader from '../vue/mainHeader.vue';

export default {
  init() {
    new Vue({
      el: '#app',
      components: {
        Home,
        MainHeader
      }
    });
  }
};
