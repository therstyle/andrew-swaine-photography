<template>
  <article>
    <h1 class="page-title">{{ pageTitle }}</h1>
    <nav v-if="menu">
      <ul>
        <li v-for="(menuItem, index) in menu" :key="index">
          <router-link to=""></router-link>
        </li>
      </ul>
    </nav>
    
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
      pageTitle: '',
      menu: [],
      gallery: []
    }
  },
  props: {
    pageId: Number
  },
  created: function() {
    this.loadData(this.restUrl(15));
  },
  methods: {
     restUrl: function(pageId) {
      return `${wp.url}/wp-json/as/v1/pages/${pageId}`;
    },
    loadData(url) {
      fetch(url).
      then(response => response.json()).
      then(data => {
        console.log(data);
        this.pageTitle = data.page_title;
        this.menu = data.menu;
        this.gallery = data.gallery;
      })
    }
  }
}
</script>