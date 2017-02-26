import 'bootstrap/dist/css/bootstrap.css'; // eslint-disable-line import/extensions
import 'bootstrap/dist/js/bootstrap.js'; // eslint-disable-line import/extensions

import Vue from 'vue';
import App from './containers/App.vue';

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App),
});
