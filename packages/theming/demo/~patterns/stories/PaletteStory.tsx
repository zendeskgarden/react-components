/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react';
import { DEFAULT_THEME, IGardenTheme, ThemeProvider } from '@zendeskgarden/react-theming';
import { Tabs } from '@zendeskgarden/react-tabs';
import { Button } from '@zendeskgarden/react-buttons';
import { Chrome, Body, Content, IChromeProps } from '@zendeskgarden/react-chrome';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Tokens } from './components/Tokens';
import { ColorPalette } from './components/ColorPalette';
import { Grid } from '@zendeskgarden/react-grid';

/* prettier-ignore */
const INDIGO = {
  "100": "#C5CAE9",
  "200": "#9FA8DA",
  "300": "#7986CB",
  "400": "#5C6BC0",
  "500": "#3F51B5",
  "600": "#3949AB",
  "700": "#303F9F",
  "800": "#283593",
  "900": "#1A237E"
};

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

  const hues = Object.keys(theme(DEFAULT_THEME).palette).filter(
    _hue => _hue !== 'black' && _hue !== 'white' && _hue !== 'product'
  );

  return (
    <ThemeProvider theme={theme}>
      <Tabs>
        <Tabs.TabList>
          <Tabs.Tab item="components">Components</Tabs.Tab>
          <Tabs.Tab item="palette">Palette</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanel item="components">
          <Grid>
            <Grid.Row>
              <Grid.Col textAlign="center">
                <Button>default</Button>
              </Grid.Col>
              <Grid.Col textAlign="center">
                <Button isDanger>danger</Button>
              </Grid.Col>
              <Grid.Col textAlign="center">
                <Button isNeutral>neutral</Button>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row style={{ marginTop: 20 }}>
              <Grid.Col textAlign="center">
                <Button isPrimary>primary</Button>
              </Grid.Col>
              <Grid.Col textAlign="center">
                <Button isDanger isPrimary>
                  danger
                </Button>
              </Grid.Col>
              <Grid.Col textAlign="center">
                <Button isNeutral isPrimary>
                  neutral
                </Button>
              </Grid.Col>
            </Grid.Row>
          </Grid>
          {/* <Chrome hue={hue} isFluid style={{ height: 'calc(100vh - 140px)' }}>
            <Nav />
            <Body>
              <Header />
              <Content>
                <Main />
              </Content>
            </Body>
          </Chrome> */}
        </Tabs.TabPanel>
        <Tabs.TabPanel item="palette">
          <>
            <Tokens />
            <ColorPalette hues={hues} />
          </>
        </Tabs.TabPanel>
      </Tabs>
    </ThemeProvider>
  );
};
