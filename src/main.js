import Vue from 'vue'
import star from './star.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(star)
}).$mount('#app')
