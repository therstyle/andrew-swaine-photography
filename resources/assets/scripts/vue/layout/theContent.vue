<template>
  <article v-html="theContent"></article>
</template>

<script>
export default {
  name: 'the-content',
  props: {
    theContent: String
  }
}
</script>