/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { create } from 'storybook/theming/create';
import { ThemeProvider, DEFAULT_THEME, getColor } from '../packages/theming/src';

const DARK_THEME = { ...DEFAULT_THEME, colors: { ...DEFAULT_THEME.colors, base: 'dark' } };
const DARK = getColor({ theme: DARK_THEME, variable: 'background.default' });
const LIGHT = getColor({ theme: DEFAULT_THEME, variable: 'background.default' });

export const args = {
  '$colors.dark': DEFAULT_THEME.colors.variables.dark,
  '$colors.light': DEFAULT_THEME.colors.variables.light
};

export const argTypes = {
  '$colors.dark': { name: 'colors.dark', table: { category: 'Variables' } },
  '$colors.light': { name: 'colors.light', table: { category: 'Variables' } }
};

export const parameters = {
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
    sort: 'alpha'
  },
  docs: {
    theme: create({
      base: DEFAULT_THEME.colors.base
    })
  }
};

const GlobalPreviewStyling = createGlobalStyle`
  html {
    background-color: ${p => getColor({ theme: p.theme, variable: 'background.default' })};
    color: ${p => getColor({ theme: p.theme, variable: 'foreground.default' })};
  }

  body {
    /* stylelint-disable-next-line declaration-no-important */
    padding: 0 !important;
    font-family: ${p => p.theme.fonts.system};
  }
`;

const StyledExampleWrapper = styled.div`
  direction: ${p => (p.theme.rtl ? 'rtl' : 'ltr')};
  padding: ${p => p.theme.space.xl};
`;

const withThemeProvider = (story, context) => {
  const rtl = context.globals.locale === 'rtl';

  if (context.globals.bedrock === 'enabled') {
    document.querySelector('link[href$="bedrock/dist/index.css"]').removeAttribute('disabled');
  } else {
    document.querySelector('link[href$="bedrock/dist/index.css"]').setAttribute('disabled', true);
  }

  const colors = {
    ...DEFAULT_THEME.colors,
    primaryHue: context.globals.primaryHue,
    variables: {
      ...DEFAULT_THEME.colors.variables,
      dark: context.args['$colors.dark'],
      light: context.args['$colors.light']
    }
  };

  if (
    context.globals.backgrounds && context.globals.backgrounds.value !== 'transparent'
      ? context.globals.backgrounds.value === DARK
      : context.parameters.backgrounds.default === 'dark'
  ) {
    colors.base = 'dark';
  }

  const theme = { ...DEFAULT_THEME, colors, rtl };

  return (
    <ThemeProvider theme={theme}>
      <GlobalPreviewStyling />
      {/* Work-around to get Storybook to play well with CSS transitions that are associated to props.
      See: https://github.com/storybookjs/storybook/issues/12255 */}
      <StyledExampleWrapper>{story()}</StyledExampleWrapper>
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const globalTypes = {
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
      icon: 'paintbrush',
      items: [
        { value: DEFAULT_THEME.colors.primaryHue, title: 'Default primary hue' },
        { value: 'fuschia', title: 'Custom primary hue' }
      ]
    }
  }
};
