/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react';
import styled, { DefaultTheme, useTheme } from 'styled-components';
import { IGardenTheme, getColor } from '@zendeskgarden/react-theming';
import { Tag } from '@zendeskgarden/react-tags';

const toBackground = (theme: DefaultTheme, backgroundColor: string) => {
  const color = getColor({ hue: 'neutralHue', shade: 300, theme });
  const size = 26;
  const dimensions = `${size}px ${size}px`;
  const positionX1 = theme.rtl ? '100%' : '0';
  const positionX2 = theme.rtl ? `calc(100% - ${size / 2}px)` : `${size / 2}px`;
  const position1 = `${positionX1} 0`;
  const position2 = `${positionX2} ${size / 2}px`;
  const position3 = `${positionX2} 0`;
  const position4 = `${positionX1} ${size / -2}px`;

  return `
    linear-gradient(${backgroundColor}, ${backgroundColor}), 
    linear-gradient(45deg, ${color} 25%, transparent 25%) ${position1} / ${dimensions} repeat,
    linear-gradient(45deg, transparent 75%, ${color} 75%) ${position2} / ${dimensions} repeat,
    linear-gradient(135deg, ${color} 25%, transparent 25%) ${position3} / ${dimensions} repeat,
    linear-gradient(135deg, transparent 75%, ${color} 75%) ${position4} / ${dimensions} repeat
  `;
};

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
      transparency: transparency ? transparency / 100 : undefined,
      variable
    });

    background = toBackground(theme, backgroundColor);
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
