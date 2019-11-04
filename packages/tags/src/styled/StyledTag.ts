/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import math from 'polished/lib/math/math';
import readableColor from 'polished/lib/color/readableColor';
import stripUnit from 'polished/lib/helpers/stripUnit';
import { DEFAULT_THEME, getColor, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledAvatar } from './StyledAvatar';
import { StyledClose } from './StyledClose';

const COMPONENT_ID = 'tags.tag_view';

const colorStyles = (props: IStyledTagProps & ThemeProps<DefaultTheme>) => {
  let backgroundColor;
  let boxShadowColor;
  let foregroundColor;
  let closeColor;

  if (props.hue) {
    const shade = props.hue === 'yellow' ? 400 : 600;

    backgroundColor = getColor(props.hue, shade, props.theme);
    boxShadowColor = getColor(props.hue, shade, props.theme, 0.35);

    if (props.hue === 'yellow' || props.hue === 'lemon') {
      foregroundColor = getColor('yellow', 800, props.theme);
    } else {
      foregroundColor = readableColor(
        backgroundColor!,
        getColor('foreground', 600 /* DEFAULT_SHADE */, props.theme),
        getColor('background', 600 /* DEFAULT_SHADE */, props.theme)
      );
    }
  } else {
    backgroundColor = getColor('neutralHue', 200, props.theme);
    boxShadowColor = getColor('neutralHue', 600, props.theme, 0.35);
    foregroundColor = getColor('neutralHue', 700, props.theme);
    closeColor = getColor('neutralHue', 600, props.theme);
  }

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};

    &:hover {
      color: ${foregroundColor}; /* <a> element reset */
    }

    &[data-garden-focus-visible] {
      box-shadow: ${props.theme.shadows.sm(boxShadowColor!)};
    }

    & ${StyledClose} {
      color: ${closeColor};
    }
  `;
};

const sizeStyles = (props: IStyledTagProps & ThemeProps<DefaultTheme>) => {
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
  const avatarTextMargin = props.round ? avatarMargin : avatarMargin * 2;

  if (props.round) {
    borderRadius = '50%';
    padding = 0;
    minWidth = height;
    avatarBorderRadius = '50%';
  } else if (props.pill) {
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
    padding: 0 ${math(`${padding} * 1px`)};
    min-width: ${minWidth && math(`${minWidth} * 1px`)};
    height: ${math(`${height} * 1px`)};
    line-height: ${math(`${height} / ${stripUnit(fontSize)}`)};
    font-size: ${fontSize};

    & > * {
      min-width: ${minWidth ? math(`${minWidth - padding * 2} * 1px`) : '2em'};
    }

    & ${StyledAvatar} {
      /* stylelint-disable-next-line property-no-unknown */
      margin-${props.theme.rtl ? 'right' : 'left'}: ${math(`${padding - avatarMargin} * -1px`)};
      /* stylelint-disable-next-line property-no-unknown */
      margin-${props.theme.rtl ? 'left' : 'right'}: ${math(`${avatarTextMargin} * 1px`)};
      border-radius: ${avatarBorderRadius};
      width: ${math(`${avatarSize} * 1px`)};
      min-width: ${math(`${avatarSize} * 1px`)}; /* prevent flex shrink */
      height: ${math(`${avatarSize} * 1px`)};
    }

    & ${StyledClose} {
      /* stylelint-disable-next-line property-no-unknown */
      margin-${props.theme.rtl ? 'left' : 'right'}: ${math(`${padding} * -1px`)};
      border-radius: ${borderRadius};
      width: ${math(`${height} * 1px`)};
      height: ${math(`${height} * 1px`)};
    }
  `;
};

interface IStyledTagProps {
  hue?: string;
  size?: 'small' | 'medium' | 'large';
  pill?: boolean;
  round?: boolean;
}

export const StyledTag = styled.div.attrs<IStyledTagProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTagProps>`
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: ${props => (props.round || props.pill) && 'center'};
  transition: box-shadow 0.1s ease-in-out;
  border: 0; /* <button> element reset */
  max-width: 100%;
  overflow: hidden;
  vertical-align: middle;
  text-decoration: none; /* <a> element reset */
  white-space: nowrap;
  font-weight: ${props => props.theme.fontWeights.semibold};
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};

  ${props => sizeStyles(props)};

  &:hover {
    cursor: default;
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }

  &:link:hover,
  &:visited:hover {
    cursor: pointer;
  }

  &:any-link:hover {
    cursor: pointer;
  }

  &[data-garden-focus-visible] {
    text-decoration: none;
  }

  ${props => colorStyles(props)};

  & > * {
    overflow: hidden;
    text-align: ${props => props.round && 'center'};
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & ${StyledAvatar} {
    display: ${props => (props.round || props.size === 'small') && 'none'};
  }

  & ${StyledClose} {
    display: ${props => props.round && 'none'};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTag.defaultProps = {
  size: 'medium',
  theme: DEFAULT_THEME
};
