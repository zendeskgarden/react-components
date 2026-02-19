/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StorybookConfig } from '@storybook/react-vite';

import svgr from 'vite-plugin-svgr';

import svgrConfig from '../svgr.config.json' with { type: 'json' };

const PACKAGE_VERSION = JSON.stringify('storybook');

const viteFinal: StorybookConfig['viteFinal'] = config => ({
  ...config,
  define: {
    ...config.define,
    PACKAGE_VERSION
  },
  plugins: [...(config.plugins ?? []), svgr(svgrConfig as any)]
});

const config: StorybookConfig = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-designs', '@storybook/addon-docs'],
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true
  },
  framework: '@storybook/react-vite',
  stories: ['../../demo/**/*.@(mdx|stories.tsx)'],
  staticDirs: ['./static'],
  viteFinal
};

export default config;
