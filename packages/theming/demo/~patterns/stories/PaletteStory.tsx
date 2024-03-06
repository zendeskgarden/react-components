/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react';
import { Tab, TabList, TabPanel, Tabs } from '@zendeskgarden/react-tabs';
import { Chrome, Body, Content, IChromeProps } from '@zendeskgarden/react-chrome';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Tokens } from './components/Tokens';
import { IGardenTheme, ThemeProvider } from '@zendeskgarden/react-theming';

interface IArgs {
  hue?: IChromeProps['hue'];
  palette: IGardenTheme['palette'];
}

export const PaletteStory: StoryFn<IArgs> = ({ hue, palette }) => {
  const theme = (parentTheme: IGardenTheme) => ({
    ...parentTheme,
    palette: {
      ...parentTheme.palette,
      ...palette
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Tabs>
        <TabList>
          <Tab item="components">Components</Tab>
          <Tab item="palette">Palette</Tab>
        </TabList>
        <TabPanel item="components">
          <Chrome hue={hue} isFluid style={{ height: 'calc(100vh - 140px)' }}>
            <Nav />
            <Body>
              <Header />
              <Content>
                <Main />
              </Content>
            </Body>
          </Chrome>
        </TabPanel>
        <TabPanel item="palette">
          <Tokens />
        </TabPanel>
      </Tabs>
    </ThemeProvider>
  );
};
