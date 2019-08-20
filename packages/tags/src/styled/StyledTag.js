/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import { math, readableColor, stripUnit } from 'polished';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  DEFAULT_THEME,
  getColor,
  isRtl,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';
import { StyledAvatar } from './StyledAvatar';
import { StyledClose } from './StyledClose';

const COMPONENT_ID = 'tags.tag_view';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const colorStyles = props => {
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
        backgroundColor,
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

    &.focus-visible {
      box-shadow: ${props.theme.shadows.sm(boxShadowColor)};
    }

    & ${StyledClose} {
      color: ${closeColor};
    }
  `;
};

const sizeStyles = props => {
  let borderRadius;
  let padding;
  let height;
  let fontSize;
  let minWidth;
  let avatarSize;

  if (props.size === SIZE.SMALL) {
    borderRadius = props.theme.borderRadii.sm;
    padding = props.theme.space.base;
    height = props.theme.space.base * 4;
    fontSize = props.theme.fontSizes.xs;
    avatarSize = 0;
  } else if (props.size === SIZE.LARGE) {
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

  if (props.round) {
    borderRadius = '50%';
    padding = 0;
    minWidth = height;
  } else if (props.pill) {
    borderRadius = '100px';

    if (props.size === SIZE.SMALL) {
      padding = props.theme.space.base * 1.5;
      minWidth = props.theme.space.base * 6;
    } else if (props.size === SIZE.LARGE) {
      minWidth = props.theme.space.base * 12;
    } else {
      minWidth = props.theme.space.base * 7.5;
    }
  }

  const avatarBorderRadius = props.size === SIZE.LARGE ? math(`${borderRadius} - 1`) : borderRadius;
  const avatarMargin = (height - avatarSize) / 2;
  const avatarTextMargin = props.round ? avatarMargin : avatarMargin * 2;

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
      margin-${isRtl(props) ? 'right' : 'left'}: ${math(`${padding - avatarMargin} * -1px`)};
      /* stylelint-disable-next-line property-no-unknown */
      margin-${isRtl(props) ? 'left' : 'right'}: ${math(`${avatarTextMargin} * 1px`)};
      border-radius: ${avatarBorderRadius};
      width: ${math(`${avatarSize} * 1px`)};
      min-width: ${math(`${avatarSize} * 1px`)}; /* prevent flex shrink */
      height: ${math(`${avatarSize} * 1px`)};
    }

    & ${StyledClose} {
      /* stylelint-disable-next-line property-no-unknown */
      margin-${isRtl(props) ? 'left' : 'right'}: ${math(`${padding} * -1px`)};
      border-radius: ${borderRadius};
      width: ${math(`${height} * 1px`)};
      height: ${math(`${height} * 1px`)};
    }
  `;
};

export const StyledTag = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(props.className, { 'focus-visible': props.focused })
}))`
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
  font-weight: ${props => props.theme.fontWeights.semibold};
  direction: ${props => (isRtl(props) ? 'rtl' : 'ltr')};

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

  &.focus-visible {
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
    display: ${props => (props.round || props.size === SIZE.SMALL) && 'none'};
  }

  & ${StyledClose} {
    display: ${props => props.round && 'none'};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTag.propTypes = {
  hue: PropTypes.string,
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  pill: PropTypes.bool,
  round: PropTypes.bool,
  focused: PropTypes.bool,
  theme: PropTypes.object
};

StyledTag.defaultProps = {
  size: SIZE.MEDIUM,
  theme: DEFAULT_THEME
};
