<template>
  <div class="img-center">
    <img :src="this.featured.url" :alt="this.featured.alt">
  </div>
</template>

<script>
export default {
  name: 'home',
  data: function() {
    return {
      pageID: 6,
      test: this,
      featured: {
        url: '',
        alt: ''
      }
    }
  },
  created: function() {
    this.loadData(this.getUrl(6));
  },
  methods: {
     getUrl: function(pageID) {
      return `${wp.url}/wp-json/wp/v2/pages/${pageID}?_embed`;
    },
    loadData(url) {
      fetch(url).
      then(response => response.json()).
      then(data => {
        this.featured.url = data._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
        this.featured.alt = data._embedded['wp:featuredmedia'][0].alt_text;
      })
    }
  }
}
</script>