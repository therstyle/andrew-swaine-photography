<template>
  <header class="main">
    <img v-if="logo" :src="logo.url" :alt="logo.alt">
  </header>
</template>

<script>
export default {
  name: 'main-header',
  data() {
    return {
      url: `${wp.url}/wp-json/as/v1/global`,
      logo: {
        url: '',
        alt: ''
      },
      menu: []
    }
  },
  created() {
    this.loadData(this.url);
  },
  methods: {
    loadData(url) {
      fetch(url).
      then(response => response.json()).
      then(
        data => {
          console.log(data);

          this.logo.url = data.logo.url;
          this.logo.alt = data.logo.title;
          this.menu = data.menu;
        }
      )
    }
  }
}
</script>