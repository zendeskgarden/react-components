/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { previewTheme } from './gardenTheme';
import { ThemeProvider, DEFAULT_THEME } from '../packages/theming/src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*', layout: 'centered' },
  backgrounds: { disable: true },
  docs: {
    theme: previewTheme
  }
};

const GlobalPreviewStyling = createGlobalStyle`
  body {
    background-color: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.foreground};
    font-family: ${p => p.theme.fonts.system};
    font-size: ${p => p.theme.fontSizes.md};
  }
`;

const StyledExampleWrapper = styled.div`
  direction: ${p => (p.theme.rtl ? 'rtl' : 'ltr')};
  padding: ${p => p.theme.space.xl};
`;

const withThemeProvider = (Story, context) => {
  const rtl = context.globals.locale === 'rtl';

  if (context.globals.bedrock === 'enabled') {
    document.querySelector('link[href$="bedrock/index.css"]').removeAttribute('disabled');
  } else {
    document.querySelector('link[href$="bedrock/index.css"]').setAttribute('disabled', true);
  }

  return (
    <ThemeProvider theme={{ ...DEFAULT_THEME, rtl }}>
      <GlobalPreviewStyling />
      {/* Work-around to get Storybook to play well with CSS transitions that are associated to props.
      See: https://github.com/storybookjs/storybook/issues/12255 */}
      {/* eslint-disable-next-line new-cap */}
      <StyledExampleWrapper>{Story()}</StyledExampleWrapper>
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
      icon: 'paintbrush',
      items: [
        { value: 'disabled', title: 'Bedrock disabled' },
        { value: 'enabled', title: 'Bedrock enabled' }
      ]
    }
  }
};
