/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react';
import { readableColor } from 'polished';
import styled, { DefaultTheme, useTheme } from 'styled-components';
import { IGardenTheme, getColor, getColorV8 } from '@zendeskgarden/react-theming';

const toBackground = (theme: DefaultTheme, backgroundColor: string) => {
  const color = getColorV8('neutralHue', 300, theme);
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

const StyledDiv = styled.div<{ background: string; foreground?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${p => p.background};
  height: 208px;
  color: ${p => p.foreground};
`;

interface IArgs {
  dark?: object;
  hue?: string;
  light?: object;
  offset?: number;
  onThemeChange: (theme: IGardenTheme) => void;
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
  onThemeChange,
  shade,
  theme: _theme,
  transparency,
  variable
}) => {
  const parentTheme = useTheme();

  try {
    const theme = { ..._theme, colors: { ..._theme.colors, base: parentTheme.colors.base } };

    onThemeChange(theme);

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
    const background = toBackground(theme, backgroundColor);
    const foreground = (transparency || 100) < 65 ? 'inherit' : readableColor(backgroundColor);

    return (
      <StyledDiv background={background} foreground={foreground}>
        {backgroundColor}
      </StyledDiv>
    );
  } catch (error) {
    return (
      <StyledDiv background="transparent">
        {error instanceof Error ? error.message : String(error)}
      </StyledDiv>
    );
  }
};
