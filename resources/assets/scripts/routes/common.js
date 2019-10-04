import Vue from 'vue';
import Home from '../vue/Home.vue';

export default {
  init() {
    new Vue({
      el: '#app',
      components: {
        Home,
      },
      created() {
        this.loadData('https://localhost:3000/wp-json/wp/v2/pages/6');
      },
      methods: {
        loadData(url) {
          fetch(url).
          then(response => response.json()).
          then(
            data => {
              console.log(data);
            }
          )
        }
      }
    });
  }
};
