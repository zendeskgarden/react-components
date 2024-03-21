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
  getColorV8,
  retrieveComponentStyles,
  getLineHeight,
  SELECTOR_FOCUS_VISIBLE,
  focusStyles
} from '@zendeskgarden/react-theming';
import { StyledAvatar } from './StyledAvatar';
import { StyledClose } from './StyledClose';
import { ITagProps } from '../types';

const COMPONENT_ID = 'tags.tag_view';

const colorStyles = (props: ITagProps & ThemeProps<DefaultTheme>) => {
  let backgroundColor;
  let foregroundColor;
  let closeColor;

  if (props.hue) {
    const shade = props.hue === 'yellow' ? 400 : 600;

    backgroundColor = getColorV8(props.hue, shade, props.theme);

    if (props.hue === 'yellow' || props.hue === 'lemon') {
      foregroundColor = getColorV8('yellow', 800, props.theme);
    } else {
      foregroundColor = readableColor(
        backgroundColor!,
        props.theme.palette.grey[800],
        props.theme.palette.white as string
      );
    }
  } else {
    backgroundColor = getColorV8('neutralHue', 200, props.theme);
    foregroundColor = getColorV8('neutralHue', 700, props.theme);
    closeColor = getColorV8('neutralHue', 600, props.theme);
  }

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};

    &:hover {
      color: ${foregroundColor}; /* <a> element reset */
    }

    /**
     * Tags show their focus state regardless of
     * whether it was performed by a mouse or keyboard.
     **/
    ${focusStyles({
      theme: props.theme,
      shadowWidth: 'sm',
      selector: '&:focus'
    })}

    & ${StyledClose} {
      color: ${closeColor};
    }
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
