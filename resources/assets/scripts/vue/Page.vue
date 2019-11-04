<template>
  <article>
    <h1 class="page-title">{{ pageTitle }}</h1>
    <nav v-if="menu" class="menu vertical-menu">
      <ul>
        <li v-for="(menuItem, index) in menu" :key="index">
          <router-link :to="menuItem.slug">{{ menuItem.title }}</router-link>
        </li>
      </ul>
    </nav>
    
    <div v-if="gallery" id="gallery">
      <div class="gallery-photos">
        <div v-for="(galleryItem, index) in gallery" :key="index" class="gallery-item">
          <img :src="galleryItem.url" :alt="galleryItem.alt">
        </div>
      </div>

      <div class="gallery-details">
        <h1 class="page-title">{{ pageTitle }} <span class="count">{{ current }} / {{ total }}</span></h1>
        
        <div class="gallery-controls">
          <button id="prev" v-on:click="prevPhoto">Prev</button>
          <button id="next" v-on:click="nextPhoto">Next</button>
        </div>
      </div>
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
      gallery: [],
      current: 1,
      total: 0
    }
  },
  props: {
    pageId: Number
  },
  watch: {
    $route () {
      console.log('route changed');
      console.log(`page id = ${this.pageId}`);
      this.loadData(this.restUrl(this.pageId));
    }
  },
  created: function() {
    console.log(`page id = ${this.pageId}`);
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
        this.pageTitle = data.page_title;
        this.menu = data.menu;
        this.gallery = data.gallery;
        this.total = data.gallery.length
      })
    },
    nextPhoto() {
      if (this.current < this.total ) {
        this.current++;
      }
      else {
        this.current = 1;
      }
    },
    prevPhoto() {
      if (this.current !== 1) {
        this.current--;
      }
      else {
        this.current = 1;
      }
    }
  }
}
</script>