/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react';
import styled, { useTheme } from 'styled-components';
import { IGardenTheme, getCheckeredBackground, getColor } from '@zendeskgarden/react-theming';
import { Tag } from '@zendeskgarden/react-tags';

const StyledDiv = styled.div<{ background: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${p => p.background};
  height: 208px;
`;

interface IColorProps {
  dark?: object;
  hue?: string;
  light?: object;
  offset?: number;
  shade?: number;
  theme: IGardenTheme;
  transparency?: number;
  variable?: string;
}

const Color = ({ dark, hue, light, offset, shade, theme, transparency, variable }: IColorProps) => {
  let background;
  let tag;

  try {
    const backgroundColor = getColor({
      dark,
      hue,
      light,
      offset,
      shade,
      theme,
      transparency,
      variable
    });

    background = getCheckeredBackground({
      theme,
      size: 26,
      overlay: backgroundColor
    });
    tag = (
      <Tag hue={getColor({ theme, variable: 'background.default' })} size="large">
        {backgroundColor}
      </Tag>
    );
  } catch (error) {
    background = 'transparent';
    tag = (
      <Tag hue="red" size="large">
        {error instanceof Error ? error.message : String(error)}
      </Tag>
    );
  }

  return <StyledDiv background={background}>{tag}</StyledDiv>;
};

interface IArgs extends Omit<IColorProps, 'theme'> {
  theme: {
    colors: Omit<IGardenTheme['colors'], 'base'>;
    opacity: IGardenTheme['opacity'];
    palette: IGardenTheme['palette'];
  };
}

export const GetColorStory: StoryFn<IArgs> = ({
  dark,
  hue,
  light,
  offset,
  shade,
  theme: _theme,
  transparency,
  variable
}) => {
  const parentTheme = useTheme();
  const theme = {
    ...parentTheme,
    colors: { ..._theme.colors, base: parentTheme.colors.base },
    opacity: _theme.opacity,
    palette: _theme.palette
  };

  return (
    <Color
      dark={dark}
      hue={hue}
      light={light}
      offset={offset}
      shade={shade}
      theme={theme}
      transparency={transparency}
      variable={variable}
    />
  );
};
