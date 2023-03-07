import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import Loading from 'vue-loading-overlay';
import './assets/styles/main.scss'
import 'vue-loading-overlay/dist/vue-loading.css';
import Notifications from 'vue-notification'

Vue.use(Notifications)
Vue.use(Loading);
Vue.use(Vuelidate)

Vue.component('Loading', Loading)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
