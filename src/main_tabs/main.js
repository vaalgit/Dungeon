import Vue from 'vue'
import App from './mainTabs.vue'
import firebase from 'firebase'

new Vue({
  el: '#main-tabs',
  render: h => h(App)
})
