import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FirebaseVue from './firebase'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(FirebaseVue);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
