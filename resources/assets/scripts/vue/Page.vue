<template>
  <article>
    <vue-headful
      :title="titleTag"
    />
    
    <featured-image
      v-if="featured"
      :image="featured"
    ></featured-image>

    <the-content
      v-if="theContent"
      :theContent="theContent"
    ></the-content>
    
    <menu-group 
      v-if="menu"
      :menu="menu">
    </menu-group>

    <gallery 
      v-if="gallery && gallery.length > 0"
      :gallery="gallery"
      :theTitle="theTitle"
      :total="total"
    >
    </gallery>

    <videos
      v-if="videos.length > 0"
      :videos="videos"
      :theTitle="theTitle"
    >

    </videos>
  </article>
</template>

<script>
import menuGroup from './layout/menuGroup.vue';
import gallery from './layout/gallery.vue';
import theContent from './layout/theContent.vue';
import featuredImage from './layout/featuredImage.vue';
import videos from './layout/videos.vue';
import vueHeadful from 'vue-headful';

export default {
  name: 'page',
  components: {
    menuGroup, 
    gallery,
    theContent,
    featuredImage,
    videos,
    vueHeadful
  },
  data: function() {
    return {
      theTitle: '',
      theContent: '',
      featured: '',
      menu: [],
      gallery: [],
      videos: [],
      total: 0,
      titleTag: ''
    }
  },
  props: {
    pageId: Number,
    pageType: String
  },
  watch: {
    $route () {
      // console.log('route changed');
      // console.log(`page id = ${this.pageId}`);
      this.loadData(this.restUrl(this.pageId));
    }
  },
  created: function() {
    // console.log(`page id = ${this.pageId}`);
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
        // console.log(data);
        this.theTitle = data.the_title;
        this.theContent = data.the_content;
        this.featured = data.featured;
        this.menu = data.menu;
        this.gallery = data.gallery;
        this.total = data.gallery.length;
        this.videos = data.videos;
        this.titleTag = `${wp.name} | ${data.the_title}`;
        this.errorHeadline = data.error_headline;
        this.errorText = data.error_text;
      })
    }
  }
}
</script>