<template>
  <header class="main">
    <img :src="logo.url" :alt="logo.alt">
    <nav></nav>
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
      }
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
          this.logo.alt = data.logo.title
        }
      )
    }
  }
}
</script>