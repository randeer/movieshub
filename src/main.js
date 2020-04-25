import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import {About, MediaPlayerInstaller } from '@progress/kendo-mediaplayer-vue-wrapper'
Vue.use(MediaPlayerInstaller)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
