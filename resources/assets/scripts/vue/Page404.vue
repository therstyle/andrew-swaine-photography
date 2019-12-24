<template>
  <article>
    <vue-headful
      :title="titleTag"
    />

    <h1 class="page-title">{{ errorHeadline }}</h1>
    <div v-html="errorText"></div>
  </article>
</template>

<script>
import vueHeadful from 'vue-headful';

export default {
  name: 'Page404',
  data: function() {
    return {
      errorHeadline: '',
      errorText: '',
      titleTag: `${wp.name} | Page not found`
    }
  },
  components: {
    vueHeadful
  },
  created: function() {
    this.loadData(this.restUrl());
  },
  methods: {
     restUrl: function() {
      return `${wp.url}/wp-json/as/v1/global`;
    },
    loadData(url) {
      fetch(url).
      then(response => response.json()).
      then(data => {
        console.log(data);
        this.errorHeadline = data.error_headline;
        this.errorText = data.error_text;
      })
    }
  }
}
</script>

