<template>
  <div>
    <div class="gallery-photos" ref="gallery">
      <img v-for="(galleryItem, index) in gallery" 
      :key="index" 
      :data-flickity-lazyload="galleryItem.gallery_photo.url" 
      :alt="galleryItem.gallery_photo.alt">
    </div>

    <div class="gallery-details">
      <h1 class="page-title">{{ theTitle }} <span class="count">{{ current }}/{{ total }}</span></h1>
      
      <div class="gallery-controls">
        <button id="prev" v-on:click="prevPhoto">
          <svg viewBox="0 0 21 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="arrowhead-pointing-to-the-right" transform="translate(10.500000, 18.000000) scale(-1, 1) translate(-10.500000, -18.000000) " fill="#FFFFFF" fill-rule="nonzero">
                      <path d="M19.6561229,16.3819659 L3.9407099,0.666430034 C3.49630034,0.222020478 2.97067577,0 2.36223891,0 C1.75380205,0 1.22780887,0.222020478 0.783399317,0.666430034 C0.338989761,1.11083959 0.116969283,1.63683276 0.116969283,2.24490102 L0.116969283,33.6758498 C0.116969283,34.2837952 0.338989761,34.810157 0.783399317,35.2543208 C1.22830034,35.6987304 1.75429352,35.9212423 2.36223891,35.9212423 C2.97030717,35.9212423 3.49630034,35.6987304 3.9407099,35.2543208 L19.6561229,19.538785 C20.1001638,19.0948669 20.3230444,18.5685051 20.3230444,17.960314 C20.3230444,17.3523686 20.1002867,16.8263754 19.6561229,16.3819659 Z" id="Path"></path>
                  </g>
              </g>
          </svg>
        </button>

        <button id="next" v-on:click="nextPhoto">
          <svg viewBox="0 0 21 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="arrowhead-pointing-to-the-right" fill="#FFFFFF" fill-rule="nonzero">
                      <path d="M19.6561229,16.3819659 L3.9407099,0.666430034 C3.49630034,0.222020478 2.97067577,0 2.36223891,0 C1.75380205,0 1.22780887,0.222020478 0.783399317,0.666430034 C0.338989761,1.11083959 0.116969283,1.63683276 0.116969283,2.24490102 L0.116969283,33.6758498 C0.116969283,34.2837952 0.338989761,34.810157 0.783399317,35.2543208 C1.22830034,35.6987304 1.75429352,35.9212423 2.36223891,35.9212423 C2.97030717,35.9212423 3.49630034,35.6987304 3.9407099,35.2543208 L19.6561229,19.538785 C20.1001638,19.0948669 20.3230444,18.5685051 20.3230444,17.960314 C20.3230444,17.3523686 20.1002867,16.8263754 19.6561229,16.3819659 Z" id="Path"></path>
                  </g>
              </g>
          </svg>
        </button>
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
    currentIndex(index) {
      this.current = index + 1;
    },
    initCarousel() {
      this.carousel = new Flickity( this.$refs.gallery, {
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        cellAlign: 'left',
        lazyLoad: true
      });

      this.carousel.on('change', this.currentIndex);
    },
    nextPhoto() {
      this.carousel.next();
    },
    prevPhoto() {
      this.carousel.previous();
    }
  },
  mounted() {
    this.initCarousel();
  }
}
</script>