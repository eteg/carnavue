import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Vue from 'vue';
import App from './containers/App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});