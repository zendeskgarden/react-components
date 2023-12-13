/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react';
import { DefaultTheme } from 'styled-components';
import { DEFAULT_THEME, IGardenTheme, ThemeProvider, getColor } from '@zendeskgarden/react-theming';
import { Chrome, Body, Content } from '@zendeskgarden/react-chrome';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Main } from './components/Main';

interface IArgs {
  isLight: boolean;
}

export const DarkStory: StoryFn<IArgs> = ({ isLight, ...args }) => {
  const theme = (parentTheme: DefaultTheme) =>
    ({
      ...parentTheme,
      colors: {
        ...parentTheme.colors,
        base: 'dark',
        background: getColor('neutralHue', 900, parentTheme),
        foreground: getColor('neutralHue', 200, parentTheme),
        primaryHue: '#50a1e1'
      }
    }) as IGardenTheme;

  return (
    <ThemeProvider focusVisibleRef={null} theme={isLight ? undefined : theme}>
      <Chrome {...args} isFluid style={{ margin: `-${DEFAULT_THEME.space.xl}` }}>
        <Nav />
        <Body>
          <Header />
          <Content>
            <Main />
          </Content>
        </Body>
      </Chrome>
    </ThemeProvider>
  );
};
