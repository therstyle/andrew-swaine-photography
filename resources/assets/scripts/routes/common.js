import Vue from 'vue';
import Home from '../vue/Home.vue';

export default {
  init() {
    new Vue({
      el: '#app',
      components: {
        Home,
      },
      props: ['message'],
    });
  }
};
