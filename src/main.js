import Vue from 'vue';
import App from './App.vue';
import Bulma from 'bulma';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloud, faBolt, faCloudRain, faSnowflake, faSun, faSmog, faSearch, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false


library.add(faCloud, faBolt, faCloudRain, faSnowflake, faSun, faSmog, faSearch, faExclamationCircle);
Vue.component('vue-fontawesome', FontAwesomeIcon);


Vue.use(Bulma);

new Vue({
  render: h => h(App),
}).$mount('#app')
