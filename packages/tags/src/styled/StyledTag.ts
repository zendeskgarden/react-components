/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math, readableColor } from 'polished';
import {
  DEFAULT_THEME,
  retrieveComponentStyles,
  getLineHeight,
  SELECTOR_FOCUS_VISIBLE,
  focusStyles,
  getColor,
  IGardenTheme
} from '@zendeskgarden/react-theming';
import { StyledAvatar } from './StyledAvatar';
import { StyledClose } from './StyledClose';
import { ITagProps } from '../types';

const COMPONENT_ID = 'tags.tag_view';

/*
 * 1. Anchor element reset
 * 2. Tags show focus state whether performed by mouse or keyboard
 */
const colorStyles = ({ theme, hue }: ITagProps & ThemeProps<DefaultTheme>) => {
  let backgroundColor;
  let foregroundColor;

  if (hue) {
    foregroundColor = getColor({ theme, variable: 'foreground.onEmphasis' });

    switch (hue) {
      case 'grey':
      case 'neutralHue':
        backgroundColor = getColor({
          theme,
          variable: 'background.emphasis',
          dark: { offset: -300 }
        });
        break;

      case 'blue':
      case 'primaryHue':
        backgroundColor = getColor({ theme, variable: 'background.primaryEmphasis' });
        break;

      case 'red':
      case 'dangerHue':
        backgroundColor = getColor({ theme, variable: 'background.dangerEmphasis' });
        break;

      case 'green':
      case 'successHue':
        backgroundColor = getColor({ theme, variable: 'background.successEmphasis' });
        break;

      case 'yellow':
      case 'warningHue':
        backgroundColor = getColor({ theme, hue: 'warningHue', shade: 400 });

        if (theme.colors.base === 'light') {
          foregroundColor = getColor({ theme, variable: 'foreground.warningEmphasis' });
        }

        break;

      case 'kale':
      case 'chromeHue':
        backgroundColor = getColor({
          theme,
          hue: 'chromeHue',
          dark: { shade: 500 },
          light: { shade: 800 }
        });

        break;

      default: {
        const lightTheme = { ...theme, colors: { ...theme.colors, base: 'light' } } as IGardenTheme;
        const darkTheme = { ...theme, colors: { ...theme.colors, base: 'dark' } } as IGardenTheme;
        const variable = 'foreground.onEmphasis';

        backgroundColor = getColor({ theme, hue });
        foregroundColor = readableColor(
          backgroundColor,
          getColor({ theme: darkTheme, variable }),
          getColor({ theme: lightTheme, variable }),
          false /* disable strict mode to prevent black */
        );

        break;
      }
    }
  } else {
    backgroundColor = getColor({
      theme,
      hue: 'neutralHue',
      dark: { shade: 800 },
      light: { shade: 200 }
    });
    foregroundColor = getColor({ theme, variable: 'foreground.default' });
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

const sizeStyles = (props: ITagProps & ThemeProps<DefaultTheme>) => {
  let borderRadius;
  let padding;
  let height;
  let fontSize;
  let minWidth;
  let avatarSize;

  if (props.size === 'small') {
    borderRadius = props.theme.borderRadii.sm;
    padding = props.theme.space.base;
    height = props.theme.space.base * 4;
    fontSize = props.theme.fontSizes.xs;
    avatarSize = 0;
  } else if (props.size === 'large') {
    borderRadius = props.theme.borderRadii.md;
    padding = props.theme.space.base * 3;
    height = props.theme.space.base * 8;
    fontSize = props.theme.fontSizes.sm;
    avatarSize = props.theme.space.base * 6;
  } else {
    borderRadius = props.theme.borderRadii.sm;
    padding = props.theme.space.base * 2;
    height = props.theme.space.base * 5;
    fontSize = props.theme.fontSizes.sm;
    avatarSize = props.theme.space.base * 4;
  }

  let avatarBorderRadius = props.size === 'large' ? math(`${borderRadius} - 1`) : borderRadius;
  const avatarMargin = (height - avatarSize) / 2;
  const avatarTextMargin = props.isRound ? avatarMargin : avatarMargin * 2;

  if (props.isRound) {
    borderRadius = '50%';
    padding = 0;
    minWidth = height;
    avatarBorderRadius = '50%';
  } else if (props.isPill) {
    borderRadius = '100px';
    avatarBorderRadius = '50%';

    if (props.size === 'small') {
      padding = props.theme.space.base * 1.5;
      minWidth = props.theme.space.base * 6;
    } else if (props.size === 'large') {
      minWidth = props.theme.space.base * 12;
    } else {
      minWidth = props.theme.space.base * 7.5;
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
      /* stylelint-disable-next-line property-no-unknown */
      margin-${props.theme.rtl ? 'right' : 'left'}: -${padding - avatarMargin}px;
      /* stylelint-disable-next-line property-no-unknown */
      margin-${props.theme.rtl ? 'left' : 'right'}: ${avatarTextMargin}px;
      border-radius: ${avatarBorderRadius};
      width: ${avatarSize}px;
      min-width: ${avatarSize}px; /* prevent flex shrink */
      height: ${avatarSize}px;
    }

    & ${StyledClose} {
      /* stylelint-disable-next-line property-no-unknown */
      margin-${props.theme.rtl ? 'left' : 'right'}: -${padding}px;
      border-radius: ${borderRadius};
      width: ${height}px;
      height: ${height}px;
    }
  `;
};

export const StyledTag = styled.div.attrs<ITagProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<ITagProps>`
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: ${props => props.isRound && 'center'};
  transition: box-shadow 0.1s ease-in-out;
  box-sizing: border-box;
  border: 0; /* <button> element reset */
  max-width: 100%;
  overflow: hidden;
  vertical-align: middle;
  text-decoration: none; /* <a> element reset */
  white-space: nowrap;
  font-weight: ${props => !props.isRegular && props.theme.fontWeights.semibold};
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
    display: ${props => (props.isRound || props.size === 'small') && 'none'};
  }

  & ${StyledClose} {
    display: ${props => props.isRound && 'none'};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTag.defaultProps = {
  size: 'medium',
  theme: DEFAULT_THEME
};
