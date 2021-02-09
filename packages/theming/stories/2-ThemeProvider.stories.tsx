/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled, { css } from 'styled-components';
import {
  ThemeProvider,
  getColor,
  retrieveComponentStyles,
  DEFAULT_THEME,
  IGardenTheme
} from '@zendeskgarden/react-theming';

export default {
  title: 'Components/Theming/Elements/ThemeProvider',
  component: ThemeProvider
} as Meta;

const ThemableDiv = styled.div`
  margin: ${props => props.theme.space.base * 3}px;

  :hover {
    color: ${props => getColor('warningHue', undefined, props.theme)};
  }

  ${props => retrieveComponentStyles('unique_id', props)};
`;

const Container = styled.div`
  border: ${props => props.theme.borders.sm};
  border-radius: ${props => props.theme.borderRadii.md};
  border-color: ${props => getColor('neutralHue', undefined, props.theme)};
  padding: ${props => props.theme.space.base * 5}px;
`;

/**
 * https://github.com/storybookjs/storybook/issues/13362
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Default: Story = ({ foo }) => {
  const theme: IGardenTheme = {
    ...DEFAULT_THEME,
    components: {
      unique_id: css`
        color: ${props => getColor('dangerHue', undefined, props.theme)};
      `
    },
    space: {
      ...DEFAULT_THEME.space,
      base: 4
    }
  };

  const nestedTheme = {
    ...DEFAULT_THEME,
    borderRadii: {
      ...DEFAULT_THEME.borderRadii,
      md: '0'
    },
    colors: {
      ...DEFAULT_THEME.colors,
      successHue: 'fuschia',
      neutralHue: 'purple'
    },
    components: {
      unique_id: css`
        color: ${props => getColor('successHue', undefined, props.theme)};

        :hover {
          color: ${props => getColor('primaryHue', undefined, props.theme)};
        }
      `
    },
    space: {
      ...DEFAULT_THEME.space,
      base: 5
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ThemableDiv>Simple Theme</ThemableDiv>
        <ThemeProvider theme={nestedTheme}>
          <Container>
            <ThemableDiv>Nested Theme</ThemableDiv>
          </Container>
        </ThemeProvider>
      </Container>
    </ThemeProvider>
  );
};

Default.parameters = {
  docs: {
    description: {
      component: `
All UI components are themable by a unique component ID. These themes can be nested.
      `
    }
  }
};
