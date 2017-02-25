import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';

import Vue from 'vue';
import App from './components/App.vue';
 
new Vue({
  el: '#app',
  render: h => h(App)
});