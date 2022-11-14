/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { StrictMode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { create } from '@storybook/theming/create';
import { ThemeProvider, DEFAULT_THEME } from '../packages/theming/src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    disable: true,
    grid: { disable: true }
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
  body {
    background-color: ${p => p.theme.colors.background};
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

  const theme = {
    ...DEFAULT_THEME,
    colors: { ...DEFAULT_THEME.colors, primaryHue: context.globals.primaryHue },
    rtl
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalPreviewStyling />
      {/* Work-around to get Storybook to play well with CSS transitions that are associated to props.
      See: https://github.com/storybookjs/storybook/issues/12255 */}
      <StyledExampleWrapper>{story()}</StyledExampleWrapper>
    </ThemeProvider>
  );
};

const withStrictMode = (story, context) =>
  context.globals.strictMode === 'enabled' ? <StrictMode>{story()}</StrictMode> : <>{story()}</>;

export const decorators = [withThemeProvider, withStrictMode];

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
  },
  ...(process.env.NODE_ENV === 'development' && {
    strictMode: {
      name: 'strictMode',
      description: 'Strict mode',
      defaultValue: 'disabled',
      toolbar: {
        icon: 'alert',
        items: [
          { value: 'disabled', title: 'Strict mode disabled' },
          { value: 'enabled', title: 'Strict mode enabled' }
        ]
      }
    }
  })
};
