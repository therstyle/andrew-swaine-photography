<template>
  <article>
    <h1 class="page-title">{{ pageTitle }}</h1>
    <menu-group 
      v-if="menu"
      :menu="menu">
    </menu-group>

    <gallery 
      v-if="gallery && gallery.length > 0"
      :gallery="gallery"
      :pageTitle="pageTitle"
      :total="total"
    >
    </gallery>
  </article>
</template>

<script>
import menuGroup from './layout/menuGroup.vue';
import gallery from './layout/gallery.vue';

export default {
  name: 'page',
  components: {
    menuGroup, 
    gallery
  },
  data: function() {
    return {
      pageTitle: '',
      menu: [],
      gallery: [],
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
    }
  }
}
</script>