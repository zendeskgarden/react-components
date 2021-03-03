/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import {
  withTheme,
  IGardenTheme,
  ThemeProvider,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';

interface IWithThemeProps {
  isRtl: true;
}

const LocalizedDiv = withTheme(
  ({ theme, children }: { theme: IGardenTheme; children: React.ReactChildren }) => (
    <div
      style={{
        direction: theme.rtl ? 'rtl' : 'ltr',
        border: 'grey solid',
        padding: 16,
        marginTop: 16
      }}
    >
      {children}
    </div>
  )
);

export const WithTheme: Story<IWithThemeProps> = ({ isRtl }) => {
  return (
    <ThemeProvider theme={{ ...DEFAULT_THEME, rtl: isRtl }}>
      <LocalizedDiv>This content handles RTL localization</LocalizedDiv>
    </ThemeProvider>
  );
};
