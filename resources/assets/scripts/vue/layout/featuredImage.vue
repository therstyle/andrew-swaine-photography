<template>
  <div class="img-center" v-html="image"></div>
</template>

<script>
export default {
  name: 'featured-image',
  props: {
    image: ''
  }
}
</script>