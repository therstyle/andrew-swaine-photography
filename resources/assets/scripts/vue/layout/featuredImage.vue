<template>
  <div class="img-featured img-center" v-html="image" :class="{ 'img-loaded': loaded }"></div>
</template>

<script>
export default {
  name: 'featured-image',
  props: {
    image: String,
    loaded: Boolean
  }
}
</script>