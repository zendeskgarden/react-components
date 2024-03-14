/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components';
import { StoryFn } from '@storybook/react';
import { readableColor } from 'polished';
import { IGardenTheme, getColor, getColorV8 } from '@zendeskgarden/react-theming';

export const checkeredBackground = (
  theme: DefaultTheme,
  size: number,
  positionY = 0,
  repeat = 'repeat'
) => {
  const color = getColorV8('neutralHue', 300, theme);
  const dimensions = `${size}px ${size}px`;
  const positionX1 = theme.rtl ? '100%' : '0';
  const positionX2 = theme.rtl ? `calc(100% - ${size / 2}px)` : `${size / 2}px`;
  const position1 = `${positionX1} ${positionY}px`;
  const position2 = `${positionX2} ${size / 2 + positionY}px`;
  const position3 = `${positionX2} ${positionY}px`;
  const position4 = `${positionX1} ${size / -2 + positionY}px`;

  return `
    linear-gradient(45deg, ${color} 25%, transparent 25%) ${position1} / ${dimensions} ${repeat},
    linear-gradient(45deg, transparent 75%, ${color} 75%) ${position2} / ${dimensions} ${repeat},
    linear-gradient(135deg, ${color} 25%, transparent 25%) ${position3} / ${dimensions} ${repeat},
    linear-gradient(135deg, transparent 75%, ${color} 75%) ${position4} / ${dimensions} ${repeat}
  `;
};

const background = (theme: DefaultTheme, color: string) => {
  return `linear-gradient(${color}, ${color}), ${checkeredBackground(theme, 26)}`;
};

const StyledDiv = styled.div<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${p => background(p.theme, p.backgroundColor)};
  color: ${p =>
    p.backgroundColor === 'transparent'
      ? p.theme.colors.foreground
      : readableColor(p.backgroundColor)};
  height: 208px;
`;

interface IArgs {
  dark?: object;
  hue?: string;
  light?: object;
  offset?: number;
  shade?: number;
  theme: IGardenTheme;
  transparency?: number;
  variable?: string;
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
  const theme = { ..._theme, colors: { ..._theme.colors, base: parentTheme.colors.base } };

  try {
    const _transparency = transparency ? transparency / 100 : undefined;
    const backgroundColor = getColor({
      dark,
      hue,
      light,
      offset,
      shade,
      theme,
      transparency: _transparency,
      variable
    });

    return (
      <StyledDiv backgroundColor={backgroundColor || 'transparent'}>{backgroundColor}</StyledDiv>
    );
  } catch (error) {
    return (
      <StyledDiv backgroundColor="transparent">
        {error instanceof Error ? error.message : String(error)}
      </StyledDiv>
    );
  }
};
