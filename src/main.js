import Vue from 'vue';
import App from './App.vue';
import Bulma from 'bulma';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCloud,
  faBolt,
  faCloudRain,
  faSnowflake,
  faSun,
  faSmog,
  faSearch,
  faExclamationCircle,
  faLongArrowAltUp
} from "@fortawesome/free-solid-svg-icons";

Vue.config.productionTip = false

library.add(
  faCloud,
  faBolt,
  faCloudRain,
  faSnowflake,
  faSun,
  faSmog,
  faSearch,
  faExclamationCircle,
  faLongArrowAltUp
);
Vue.component('vue-fontawesome', FontAwesomeIcon);


Vue.use(Bulma);

new Vue({
  render: h => h(App),
}).$mount('#app')
