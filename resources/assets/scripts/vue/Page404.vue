<template>
  <article>
    <h1 class="page-title">404 Error</h1>
  </article>
</template>

<script>
export default {
  name: 'page-404',
  data: function() {
    return {
      pageTitle: '',
      pageText: '',
      restUrl: `${wp.url}/wp-json/as/v1/global`
    }
  },
  created: function() {
    this.loadData(this.restUrl);
  },
  methods: {
    loadData(url) {
      fetch(url).
      then(response => response.json()).
      then(data => {
        console.log(data);
      })
    }
  }
}
</script>