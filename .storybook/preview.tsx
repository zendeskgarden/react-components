/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { create } from 'storybook/theming';
import type { Preview, ReactRenderer } from '@storybook/react';
import type { DecoratorFunction } from 'storybook/internal/types';
import { ThemeProvider, DEFAULT_THEME, getColor } from '../packages/theming/src';
import { MINIMAL_VIEWPORTS } from 'storybook/viewport';

const DARK_THEME = { ...DEFAULT_THEME, colors: { ...DEFAULT_THEME.colors, base: 'dark' as const } };
const DARK = getColor({ theme: DARK_THEME, variable: 'background.default' });
const LIGHT = getColor({ theme: DEFAULT_THEME, variable: 'background.default' });

const RESET_VALUE = '_reset';

// TODO: remove once bugfix to return undefined insteadof _reset is published:
// https://github.com/storybookjs/storybook/issues/33271
const getGlobalValue = <T,>(value: T | undefined, defaultValue: T): T =>
  !value || value === RESET_VALUE ? defaultValue : value;

const GlobalPreviewStyling = createGlobalStyle`
  body {
    font-family: ${p => p.theme.fonts.system};
    /* 'padded' layout is applied by default */
    &.sb-show-main.sb-main-padded {
      padding: ${p => p.theme.space.xl};
    }
  }
`;

const withThemeProvider: DecoratorFunction<ReactRenderer> = (Story, context) => {
  const locale = getGlobalValue(context.globals.locale, 'ltr');
  const direction = locale === 'rtl' ? 'rtl' : 'ltr';
  const rtl = direction === 'rtl';

  const bedrock = getGlobalValue(context.globals.bedrock, 'disabled');

  if (bedrock === 'enabled') {
    document.querySelector('link[href$="bedrock/dist/index.css"]')?.removeAttribute('disabled');
  } else {
    document
      .querySelector('link[href$="bedrock/dist/index.css"]')
      ?.setAttribute('disabled', 'true');
  }

  const primaryHue = getGlobalValue(context.globals.primaryHue, DEFAULT_THEME.colors.primaryHue);

  const colors = {
    ...DEFAULT_THEME.colors,
    primaryHue,
    variables: {
      ...DEFAULT_THEME.colors.variables,
      dark: context.args['$colors.dark'] as typeof DEFAULT_THEME.colors.variables.dark,
      light: context.args['$colors.light'] as typeof DEFAULT_THEME.colors.variables.light
    }
  };

  const backgroundKey = context.globals.backgrounds?.value;

  if (backgroundKey === 'dark') {
    colors.base = 'dark';
  }

  const theme = { ...DEFAULT_THEME, colors, rtl };

  return (
    <div dir={direction}>
      <ThemeProvider theme={theme}>
        <GlobalPreviewStyling />
        <Story />
      </ThemeProvider>
    </div>
  );
};

const preview: Preview = {
  args: {
    '$colors.dark': DEFAULT_THEME.colors.variables.dark,
    '$colors.light': DEFAULT_THEME.colors.variables.light
  },

  argTypes: {
    '$colors.dark': { name: 'colors.dark', table: { category: 'Variables' } },
    '$colors.light': { name: 'colors.light', table: { category: 'Variables' } }
  },

  parameters: {
    backgrounds: {
      grid: { disable: true },
      options: {
        light: { name: 'light', value: LIGHT },
        dark: { name: 'dark', value: DARK }
      }
    },
    viewport: { options: MINIMAL_VIEWPORTS },
    controls: {
      hideNoControlsWarning: true,
      sort: 'alpha'
    },
    docs: {
      theme: create({
        base: DEFAULT_THEME.colors.base
      }),
      argTypes: { sort: 'alpha' }
    }
  },
  decorators: [withThemeProvider],
  globalTypes: {
    locale: {
      name: 'direction',
      description: 'Locale direction',
      defaultValue: 'ltr',
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
      defaultValue: 'disabled',
      toolbar: {
        // Currently has no effect due to Storybook bug:
        // https://github.com/storybookjs/storybook/issues/33281
        dynamicTitle: false,
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
      defaultValue: DEFAULT_THEME.colors.primaryHue,
      toolbar: {
        dynamicTitle: false,
        icon: 'paintbrush',
        items: [
          { value: DEFAULT_THEME.colors.primaryHue, title: 'Default primary hue' },
          { value: 'fuschia', title: 'Custom primary hue' }
        ]
      }
    }
  }
};

export default preview;
