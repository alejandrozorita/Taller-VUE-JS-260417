// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Cargamos la configuración de la constante
Vue.config.movies = process.env

/* eslint-disable no-new */
new Vue({
  el: '#root',
  template: '<App/>',
  components: { App }
})
