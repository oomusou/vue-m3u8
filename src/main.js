import Vue from 'vue'
import App from './App.vue'
import VideoPlayer from 'vue-video-player'
import 'videojs-contrib-hls'

let hls = require('videojs-contrib-hls')
Vue.use(hls)
Vue.use(VideoPlayer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
