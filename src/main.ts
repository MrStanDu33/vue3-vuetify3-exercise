/**
 * @file Entry point file.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */
import App from '@/App.vue';
import router from '@/plugins/router';
import store from '@/plugins/store';
import vuetify from '@/plugins/vuetify';
import { createApp } from 'vue';
import VueSnip from 'vue-snip';

createApp(App).use(router).use(vuetify).use(store).use(VueSnip).mount('#app');
