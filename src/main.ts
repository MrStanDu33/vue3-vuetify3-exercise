/**
 * @file Entry point file.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as components from 'vuetify/components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as directives from 'vuetify/directives';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import vuetify from '@/vuetify';
import { createApp } from 'vue';
import VueSnip from 'vue-snip';

createApp(App).use(router).use(vuetify).use(store).use(VueSnip).mount('#app');
