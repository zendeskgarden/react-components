/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Chrome, Body, Content } from '@zendeskgarden/react-chrome';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Main } from './components/Main';

export const DarkStory: StoryFn = args => {
  return (
    <Chrome {...args} isFluid style={{ margin: `-${DEFAULT_THEME.space.xl}` }}>
      <Nav />
      <Body>
        <Header />
        <Content>
          <Main />
        </Content>
      </Body>
    </Chrome>
  );
};
