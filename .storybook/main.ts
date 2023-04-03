/**
 * @file Storybook configuration.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */
import type { StorybookConfig } from '@storybook/vue3-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          include: [path.resolve(__dirname, '../src')], // You can specify directories
        },
        sourceLoaderOptions: {
          injectStoryParameters: false,
          prettierConfig: {
            singleQuote: true,
            trailingComma: 'all',
            arrowParens: 'always',
            printWidth: 80,
            semi: true,
            tabWidth: 2,
          },
        },
      },
    },
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
