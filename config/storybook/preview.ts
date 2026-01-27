/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { Preview } from '@storybook/react-vite';

import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { create } from 'storybook/theming';

import { DARK, LIGHT, withThemeProvider } from './withThemeProvider';

const preview: Preview = {
  decorators: [withThemeProvider],
  globalTypes: {
    locale: {
      name: 'direction',
      description: 'Locale direction',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'ltr', title: 'LTR' },
          { value: 'rtl', title: 'RTL' }
        ]
      }
    },
    bedrock: {
      name: 'bedrock',
      description: 'CSS Bedrock',
      toolbar: {
        icon: 'link',
        items: [
          { value: 'disabled', title: 'Bedrock disabled' },
          { value: 'enabled', title: 'Bedrock enabled' }
        ]
      }
    },
    primaryHue: {
      name: 'primaryHue',
      description: 'Primary hue',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: DEFAULT_THEME.colors.primaryHue, title: 'Default primary hue' },
          { value: 'fuschia', title: 'Custom primary hue' }
        ]
      }
    }
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      grid: { disable: true },
      options: {
        light: { name: 'light', value: LIGHT },
        dark: { name: 'dark', value: DARK }
      }
    },
    controls: {
      hideNoControlsWarning: true,
      matchers: {
        color: /(?:background|color|hue)$/iu,
        date: /Date$/iu
      },
      sort: 'alpha'
    },
    docs: {
      theme: create({
        base: DEFAULT_THEME.colors.base
      }),
      argTypes: { sort: 'alpha' }
    }
  }
};

export default preview;
