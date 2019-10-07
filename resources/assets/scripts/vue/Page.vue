<template>
  <article>
    <nav v-if="menu">{{ menu }}</nav>
    <div v-if="gallery" class="gallery">
      <div v-for="(galleryItem, index) in gallery" :key="index" class="gallery-item">
        <img :src="galleryItem.url" :alt="galleryItem.alt">
      </div>
    </div>

    <!-- add gallery controls here -->
    <div v-if="gallery">
      <!-- heading -->
      <!-- controls -->
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
    this.loadData(this.restUrl(2));
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
        this.gallery = data.acf.gallery;
      })
    }
  }
}
</script>