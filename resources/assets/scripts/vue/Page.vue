<template>
  <article>
    <h1 class="page-title">{{ pageTitle }} page id = {{ pageId }}</h1>
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
    console.log(this.pageId);
    this.loadData(this.restUrl(this.pageId));
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
        console.log(this.pageId);
        this.pageTitle = data.page_title;
        this.menu = data.menu;
        this.gallery = data.gallery;
      })
    }
  }
}
</script>