<template>
  <div id="gallery">
    <div class="gallery-photos">
      <div v-for="(galleryItem, index) in gallery" :key="index" class="gallery-item" v-show="index + 1 === current">
        <img :src="galleryItem.gallery_photo.url" :alt="galleryItem.gallery_photo.alt">
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
</template>

<script>
export default {
  name: 'gallery',
  data: function() {
    return {
      current: 1
    }
  },
  props: {
    gallery: Array,
    pageTitle: String,
    total: Number
  },
  methods: {
    nextPhoto() {
      if (this.current < this.total) {
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