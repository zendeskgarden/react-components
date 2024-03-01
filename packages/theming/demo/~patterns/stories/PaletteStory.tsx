/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';
import { StoryFn } from '@storybook/react';
import { ThemeContext } from 'styled-components';
import { ToastProvider } from '@zendeskgarden/react-notifications';
import { Chrome, Body, Content } from '@zendeskgarden/react-chrome';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Tokens } from './components/Tokens';

export const PaletteStory: StoryFn = args => {
  const theme = useContext(ThemeContext);
  const toastPlacement = {
    'top-end': { style: { top: theme.space.base * 3 } }
  };

  return (
    <ToastProvider placementProps={toastPlacement} zIndex={1}>
      <Tokens />
      <Chrome {...args} isFluid>
        <Nav />
        <Body>
          <Header />
          <Content>
            <Main />
          </Content>
        </Body>
      </Chrome>
    </ToastProvider>
  );
};
