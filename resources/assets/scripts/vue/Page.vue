<template>
  <article>
    <nav v-if="menu">{{ menu }}</nav>
    <div v-if="gallery" class="gallery">
      
    </div>
  </article>
</template>

<script>
export default {
  name: 'page',
  data: function() {
    return {
      menu: '',
      gallery: []
    }
  },
  created: function() {
    this.loadData(this.restUrl(6));
  },
  methods: {
     restUrl: function(pageID) {
      return `${wp.url}/wp-json/wp/v2/pages/${pageID}?_embed`;
    },
    loadData(url) {
      fetch(url).
      then(response => response.json()).
      then(data => {
        console.log(data);
      })
    }
  }
}
</script>