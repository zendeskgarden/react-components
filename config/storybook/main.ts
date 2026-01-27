/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-designs', '@storybook/addon-docs'],
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true
  },
  framework: '@storybook/react-vite',
  stories: ['../../demo/**/*.stories.tsx'],
  staticDirs: ['./static']
};

export default config;
