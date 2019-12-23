<template>
  <header class="main">
    <router-link to="/" v-if="logo"><img :src="logo.url" :alt="logo.alt"></router-link>
    <button class="menu-toggle" :class="{ 'menu-active': menuActive }" v-on:click="menuToggle">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav class="menu main-menu" :class="{ 'menu-active': menuActive }">
      <ul>
        <li v-for="(menuItem, index) in menu" :key="index">
          <router-link :to="menuItem.slug">{{ menuItem.title }}</router-link>
        </li>
      </ul>
    </nav>
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
      menu: [],
      menuActive: false
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
    },
    menuToggle() {
      console.log('toggled menu');
      this.menuActive = !this.menuActive;
    }
  }
}
</script>