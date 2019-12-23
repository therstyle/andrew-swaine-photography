<template>
  <div>
    <div class="video" v-for="(video, index) in videos" :key="index">
      <div class="fluid-width-video-wrapper" v-html="video.video_html"></div>
    </div>

    <h1 class="page-title">{{ theTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: 'videos',
  props: {
    videos: Array,
    theTitle: String
  }
}
</script>