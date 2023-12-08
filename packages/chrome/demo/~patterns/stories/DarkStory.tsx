/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { DefaultTheme } from 'styled-components';
import { ThemeProvider } from '@zendeskgarden/react-theming';

interface IArgs {
  test: boolean;
}

export const DarkStory: Story<IArgs> = props => {
  const theme = (parentTheme: DefaultTheme) => ({
    ...parentTheme
  });

  return (
    <ThemeProvider focusVisibleRef={null} theme={theme}>
      <div {...props}>Dark</div>
    </ThemeProvider>
  );
};
