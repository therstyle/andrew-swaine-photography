<template>
  <div>
    <div class="gallery-photos" ref="gallery">
      <img v-for="(galleryItem, index) in gallery" :key="index" :src="galleryItem.gallery_photo.url" :alt="galleryItem.gallery_photo.alt">
    </div>

    <div class="gallery-details">
      <h1 class="page-title">{{ theTitle }} <span class="count">{{ current }} / {{ total }}</span></h1>
      
      <div class="gallery-controls">
        <button id="prev" v-on:click="prevPhoto"></button>
        <button id="next" v-on:click="nextPhoto"></button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../../../styles/vendor/flickity';
</style>

<script>
import Flickity from 'flickity';

export default {
  name: 'gallery',
  data: function() {
    return {
      current: 1,
      carousel: ''
    }
  },
  props: {
    gallery: Array,
    theTitle: String,
    total: Number
  },
  methods: {
    initCarousel() {
      this.carousel = new Flickity( this.$refs.gallery, {
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        cellAlign: 'left'
      });
      console.log('init carousel');
    },
    nextPhoto() {
      if (this.current < this.total) {
        this.current++;
      }
      else {
        this.current = 1;
      }
      this.carousel.next();
    },
    prevPhoto() {
      if (this.current !== 1) {
        this.current--;
      }
      else {
        this.current = 1;
      }
      this.carousel.previous();
    }
  },
  mounted() {
    this.initCarousel();
  }
}
</script>