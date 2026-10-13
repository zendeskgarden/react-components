/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math, readableColor } from 'polished';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';

import type { IGardenTheme } from '../../theming/types';
import { componentStyles } from '../../theming/utils/componentStyles';
import { SELECTOR_FOCUS_VISIBLE, focusStyles } from '../../theming/utils/focusStyles';
import { getColor } from '../../theming/utils/getColor';
import getLineHeight from '../../theming/utils/getLineHeight';
import { ITagProps } from '../../types/elements';
import { StyledAvatar } from './StyledAvatar';
import { StyledClose } from './StyledClose';

interface IStyledTagProps extends ThemeProps<DefaultTheme> {
  $hue?: ITagProps['hue'];
  $isEmphasis?: ITagProps['isEmphasis'];
  $isPill?: ITagProps['isPill'];
  $isRegular?: ITagProps['isRegular'];
  $isRound?: ITagProps['isRound'];
  $size?: ITagProps['size'];
}

const HUE_KEYS = ['primaryHue', 'dangerHue', 'warningHue', 'successHue', 'neutralHue', 'chromeHue'];

const isNeutralHue = (hue?: string) => !hue || hue === 'grey' || hue === 'neutralHue';

const isNamedHue = (theme: IGardenTheme, hue: string) =>
  HUE_KEYS.includes(hue) || Object.prototype.hasOwnProperty.call(theme.palette, hue);

/*
 * 1. Anchor element reset
 * 2. Tags show focus state whether performed by mouse or keyboard
 */
const colorStyles = ({ theme, $hue, $isEmphasis }: IStyledTagProps) => {
  let backgroundColor;
  let foregroundColor;

  if (isNeutralHue($hue)) {
    if ($isEmphasis) {
      backgroundColor = getColor({
        theme,
        hue: 'neutralHue',
        light: { shade: 700 },
        dark: { shade: 400 }
      });
      foregroundColor = getColor({ theme, variable: 'foreground.onEmphasis' });
    } else {
      backgroundColor = getColor({
        theme,
        hue: 'neutralHue',
        light: { shade: 200 },
        dark: { shade: 900 }
      });
      foregroundColor = getColor({ theme, variable: 'foreground.default' });
    }
  } else if (isNamedHue(theme, $hue!)) {
    if ($isEmphasis) {
      backgroundColor = getColor({ theme, hue: $hue, light: { shade: 700 }, dark: { shade: 600 } });
      foregroundColor = getColor({ theme, variable: 'foreground.onEmphasis' });
    } else {
      backgroundColor = getColor({ theme, hue: $hue, light: { shade: 200 }, dark: { shade: 900 } });
      foregroundColor = getColor({ theme, hue: $hue, light: { shade: 900 }, dark: { shade: 300 } });
    }
  } else {
    const lightTheme = { ...theme, colors: { ...theme.colors, base: 'light' } } as IGardenTheme;
    const darkTheme = { ...theme, colors: { ...theme.colors, base: 'dark' } } as IGardenTheme;
    const variable = 'foreground.onEmphasis';

    backgroundColor = getColor({ theme, hue: $hue });
    foregroundColor = readableColor(
      backgroundColor,
      getColor({ theme: darkTheme, variable }),
      getColor({ theme: lightTheme, variable }),
      false /* disable strict mode to prevent black */
    );
  }

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};

    &:hover {
      color: ${foregroundColor}; /* [1] */
    }

    ${focusStyles({
      theme,
      shadowWidth: 'sm',
      selector: '&:focus' /* [2] */
    })}
  `;
};

const sizeStyles = ({ $isPill, $isRound, $size, theme }: IStyledTagProps) => {
  let borderRadius;
  let padding;
  let height;
  let fontSize;
  let minWidth;
  let avatarSize;

  if ($size === 'small') {
    borderRadius = theme.borderRadii.sm;
    padding = theme.space.base;
    height = theme.space.base * 4;
    fontSize = theme.fontSizes.xs;
    avatarSize = 0;
  } else if ($size === 'large') {
    borderRadius = theme.borderRadii.md;
    padding = theme.space.base * 3;
    height = theme.space.base * 8;
    fontSize = theme.fontSizes.sm;
    avatarSize = theme.space.base * 6;
  } else {
    borderRadius = theme.borderRadii.sm;
    padding = theme.space.base * 2;
    height = theme.space.base * 5;
    fontSize = theme.fontSizes.sm;
    avatarSize = theme.space.base * 4;
  }

  let avatarBorderRadius = $size === 'large' ? math(`${borderRadius} - 1`) : borderRadius;

  if ($isRound) {
    borderRadius = '50%';
    padding = 0;
    minWidth = height;
    avatarBorderRadius = '50%';
  } else if ($isPill) {
    borderRadius = '100px';
    avatarBorderRadius = '50%';

    if ($size === 'small') {
      padding = theme.space.base * 1.5;
      minWidth = theme.space.base * 6;
    } else if ($size === 'large') {
      minWidth = theme.space.base * 12;
    } else {
      minWidth = theme.space.base * 7.5;
    }
  }

  return css`
    border-radius: ${borderRadius};
    padding: 0 ${padding}px;
    min-width: ${minWidth ? `${minWidth}px` : `calc(${padding * 2}px + 1ch)`};
    height: ${height}px;
    line-height: ${getLineHeight(height, fontSize)};
    font-size: ${fontSize};

    & > * {
      width: 100%;
      min-width: ${minWidth ? `${minWidth - padding * 2}px` : '1ch'};
    }

    & ${StyledAvatar} {
      margin-${theme.rtl ? 'right' : 'left'}: -${theme.space.base}px;
      margin-${theme.rtl ? 'left' : 'right'}: ${theme.space.base}px;
      border-radius: ${avatarBorderRadius};
      width: ${avatarSize}px;
      min-width: ${avatarSize}px; /* prevent flex shrink */
      height: ${avatarSize}px;
    }

    & ${StyledClose} {
      margin-${theme.rtl ? 'left' : 'right'}: -${theme.space.base}px;
      border-radius: ${borderRadius};
      width: ${height}px;
      height: ${height}px;
    }
  `;
};

export const StyledTag = styled.div<IStyledTagProps>`
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: ${props => props.$isRound && 'center'};
  transition: box-shadow 0.1s ease-in-out;
  box-sizing: border-box;
  border: 0; /* <button> element reset */
  max-width: 100%;
  overflow: hidden;
  vertical-align: middle;
  text-decoration: none; /* <a> element reset */
  white-space: nowrap;
  font-weight: ${props => !props.$isRegular && props.theme.fontWeights.semibold};
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};

  ${props => sizeStyles(props)};

  &:hover {
    cursor: default;
    text-decoration: none;
  }

  &:link:hover,
  &:visited:hover {
    cursor: pointer;
  }

  &:any-link:hover {
    cursor: pointer;
  }

  ${SELECTOR_FOCUS_VISIBLE} {
    text-decoration: none;
  }

  ${props => colorStyles(props)};

  & > * {
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & b {
    font-weight: ${props => props.theme.fontWeights.semibold};
  }

  & ${StyledAvatar} {
    display: ${props => (props.$isRound || props.$size === 'small') && 'none'};
  }

  & ${StyledClose} {
    display: ${props => props.$isRound && 'none'};
  }

  ${componentStyles};
`;
