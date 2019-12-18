import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './common/stylus/index.styl'
const axios = require('axios').default
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// new Vue({
//   el: 'body',
//   component:{App}
// })
