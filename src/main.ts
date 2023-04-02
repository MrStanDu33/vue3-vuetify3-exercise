/**
 * @file Entry point file.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

import './assets/main.css';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(router).use(vuetify).use(store).mount('#app');
