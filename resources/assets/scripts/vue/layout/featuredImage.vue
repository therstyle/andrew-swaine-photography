<template>
  <div class="img-featured img-center" v-html="image"></div>
</template>

<script>
export default {
  name: 'featured-image',
  props: {
    image: String
  }
}
</script>