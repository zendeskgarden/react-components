/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider, useTheme } from 'styled-components';
import { StoryFn } from '@storybook/react-vite';
import ClearIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import DarkIcon from '@zendeskgarden/svg-icons/src/16/moon-stroke.svg';
import LightIcon from '@zendeskgarden/svg-icons/src/16/sun-stroke.svg';
import SystemIcon from '@zendeskgarden/svg-icons/src/16/monitor-stroke.svg';
import {
  ColorScheme,
  ColorSchemeProvider,
  getColor,
  IColorSchemeProviderProps,
  IGardenTheme,
  useColorScheme,
  useWindow
} from '@zendeskgarden/react-theming';
import { Grid } from '@zendeskgarden/react-grid';
import { IconButton } from '@zendeskgarden/react-buttons';
import { IMenuProps, Item, ItemGroup, Menu } from '@zendeskgarden/react-dropdowns';
import { Field, Input } from '@zendeskgarden/react-forms';
import { Code } from '@zendeskgarden/react-typography';
import { Tooltip } from '@zendeskgarden/react-tooltips';

const StyledGrid = styled(Grid)`
  background-color: ${p => getColor({ theme: p.theme, variable: 'background.default' })};
`;

const StyledIconButton = styled(IconButton)`
  position: absolute;
  right: ${p => p.theme.space.base * 3}px;
  bottom: ${p => p.theme.space.base}px;
`;

const Content = ({
  colorSchemeKey = 'color-scheme'
}: {
  colorSchemeKey: IColorSchemeProviderProps['colorSchemeKey'];
}) => {
  const win = useWindow();
  const localStorage = win?.localStorage;
  const { colorScheme, isSystem, setColorScheme } = useColorScheme();
  const [inputValue, setInputValue] = useState('');
  const _theme = useTheme() as IGardenTheme;
  const theme = { ..._theme, colors: { ..._theme.colors, base: colorScheme } };

  const handleChange: IMenuProps['onChange'] = changes => {
    if (changes.value) {
      setColorScheme(changes.value as ColorScheme);
    }
  };

  const handleClear = () => {
    localStorage?.removeItem(colorSchemeKey!);
    setInputValue('');
  };

  useEffect(() => {
    setInputValue(localStorage?.getItem(colorSchemeKey!) || '');
  }, [colorSchemeKey, colorScheme, isSystem, localStorage]);

  return (
    <ThemeProvider theme={theme}>
      <StyledGrid gutters="xl">
        <Grid.Row style={{ height: 'calc(100vh - 80px)' }}>
          <Grid.Col alignSelf="center" sm={5}>
            <div style={{ position: 'relative' }}>
              <Field>
                <Field.Label>
                  Local {!!colorSchemeKey && <Code>{colorSchemeKey}</Code>} storage
                </Field.Label>
                <Input
                  disabled={colorSchemeKey === null ? true : undefined}
                  placeholder={colorSchemeKey === null ? 'unused' : 'unspecified'}
                  readOnly
                  value={inputValue}
                />
                {!!inputValue && (
                  <Tooltip content={`Clear ${colorSchemeKey} storage`}>
                    <StyledIconButton focusInset onClick={handleClear} size="small">
                      <ClearIcon />
                    </StyledIconButton>
                  </Tooltip>
                )}
              </Field>
            </div>
          </Grid.Col>
          <Grid.Col textAlign="center" alignSelf="center">
            <Menu
              /* eslint-disable-next-line react/no-unstable-nested-components */
              button={props => (
                <IconButton {...props}>
                  {theme.colors.base === 'dark' ? <DarkIcon /> : <LightIcon />}
                </IconButton>
              )}
              onChange={handleChange}
              placement="bottom-end"
              selectedItems={[{ value: isSystem ? 'system' : colorScheme }]}
            >
              <ItemGroup aria-label="appearance" type="radio">
                <Item icon={<LightIcon />} value="light">
                  Light
                </Item>
                <Item icon={<DarkIcon />} value="dark">
                  Dark
                </Item>
                <Item icon={<SystemIcon />} isSelected value="system">
                  System
                </Item>
              </ItemGroup>
            </Menu>
          </Grid.Col>
        </Grid.Row>
      </StyledGrid>
    </ThemeProvider>
  );
};

export const ColorSchemeProviderStory: StoryFn<IColorSchemeProviderProps> = ({
  colorSchemeKey,
  initialColorScheme
}) => (
  <ColorSchemeProvider
    key={initialColorScheme}
    colorSchemeKey={colorSchemeKey}
    initialColorScheme={initialColorScheme}
  >
    <Content colorSchemeKey={colorSchemeKey} />
  </ColorSchemeProvider>
);
