<template>
  <div>
    <video-player class="video-player" :options="playerOptions"></video-player>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'

export default {
  name: 'App',
  data: () => ({
    playerOptions: {
      sources: [{
        type: 'application/x-mpegURL',
        src: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
      }],
    }
  })
}
</script>
