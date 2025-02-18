import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './Routes';
import './directives/Transform';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
