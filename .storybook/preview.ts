/**
 * @file Storybook preview configuration.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */
import vuetify from '@/plugins/vuetify';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import VueSnip from 'vue-snip';

import { withVuetifyTheme } from './withVuetifyTheme.decorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const parameters = {
  controls: { expanded: true },

  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

setup((app) => {
  app.use(vuetify);
  app.use(VueSnip);
});

export const decorators = [withVuetifyTheme];

export default preview;
