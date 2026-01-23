/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';
import svgr from 'vite-plugin-svgr';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PACKAGE_NAMES = readdirSync(path.resolve(__dirname, '../packages')).filter(
  name => name !== '.template'
);

const DEMO_PATH = `../packages/${process.env.PACKAGE || '*'}/demo/**`;

const config: StorybookConfig = {
  stories: [`${DEMO_PATH}/*.mdx`, `${DEMO_PATH}/*.stories.@(js|jsx|ts|tsx)`],
  staticDirs: ['./static'],

  addons: ['@storybook/addon-a11y', '@storybook/addon-designs', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true
    }
  },

  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true
  },

  viteFinal: async viteConfig => {
    const { mergeConfig } = await import('vite');

    return mergeConfig(viteConfig, {
      assetsInclude: ['**/*.md'],
      define: {
        PACKAGE_VERSION: JSON.stringify('storybook')
      },
      plugins: [
        svgr({
          include: '**/*.svg',
          svgrOptions: {
            plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
            svgoConfig: {
              plugins: [
                {
                  name: 'addAttributesToSVGElement',
                  params: {
                    attributes: [{ focusable: 'false' }, { 'aria-hidden': 'true' }]
                  }
                }
              ]
            }
          }
        })
      ],
      resolve: {
        alias: PACKAGE_NAMES.reduce<Record<string, string>>((aliases, packageName) => {
          aliases[`@zendeskgarden/react-${packageName}`] = path.resolve(
            __dirname,
            `../packages/${packageName}/src`
          );

          return aliases;
        }, {})
      }
    });
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};

export default config;
