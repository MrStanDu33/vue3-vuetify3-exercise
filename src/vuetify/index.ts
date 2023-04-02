/**
 * @file Vuetify configuration.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
// Ensure you are using css-
import type { ThemeDefinition } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import 'vuetify/styles';

const theme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#9b2fae',
    'primary-lighten': '#b86ac3',
  },
};

export default createVuetify({
  theme: {
    defaultTheme: 'theme',
    themes: {
      theme,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
