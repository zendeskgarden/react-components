/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, keyframes } from 'styled-components';
import math from 'polished/lib/math/math';
import PropTypes from 'prop-types';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { StyledText } from './StyledText';

const AVATARS_COMPONENT_ID = 'avatars.avatar';

const SIZE = {
  EXTRASMALL: 'extrasmall',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const STATUS = {
  AVAILABLE: 'available',
  ACTIVE: 'active',
  AWAY: 'away'
};

const TRANSITION_DURATION = 0.25;

const badgeStyles = props => {
  let content = `''`;
  let position = 0;
  let padding = 0;
  let minWidth = 0;
  let height = 0;
  let fontSize = 0;

  if (props.status === STATUS.ACTIVE) {
    position = math(`${props.theme.space.base} * -1px`);

    if (props.size === SIZE.SMALL) {
      fontSize = props.theme.fontSizes.xs;
      height = math(`${props.theme.space.base} * 4px`);
      minWidth = fontSize;
      padding = math(`${props.theme.space.base} - 1px`);
      content = 'attr(data-badge)';
    } else if (props.size === SIZE.EXTRASMALL) {
      height = math(`${props.theme.space.base} * 2px`);
      minWidth = height;
    } else {
      fontSize = props.theme.fontSizes.xs;
      height = math(`${props.theme.space.base} * 5px`);
      minWidth = fontSize;
      padding = math(`${props.theme.space.base} + 1px`);
      content = 'attr(data-badge)';
    }
  } else if (props.status === STATUS.AVAILABLE) {
    position = math(`${props.theme.space.base} * -1px`);

    if (props.size === SIZE.LARGE) {
      height = math(`${props.theme.space.base} * 3.5px`);
    } else if (props.size === SIZE.SMALL) {
      height = math(`${props.theme.space.base} * 2.5px`);
    } else if (props.size === SIZE.EXTRASMALL) {
      height = math(`${props.theme.space.base} * 2px`);
    } else {
      height = math(`${props.theme.space.base} * 3px`);
    }

    minWidth = height;
  } else if (props.size === SIZE.LARGE) {
    position = math(`${props.theme.shadowWidths.sm} + 1`);
  } else if (props.size === SIZE.SMALL) {
    position = math(`${props.theme.shadowWidths.sm} - 1`);
  } else if (props.size === SIZE.MEDIUM) {
    position = props.theme.shadowWidths.sm;
  }

  const animation = keyframes`
    0% {
      transform: scale(.1);
    }
  `;
  const opacity = props.status === STATUS.ACTIVE || props.status === STATUS.AVAILABLE ? 1 : 0;
  const border = `${props.theme.shadowWidths.sm} ${props.theme.borderStyles.solid}`;

  return css`
    display: inline-block;
    position: absolute;
    ${props.theme.rtl ? 'left' : 'right'}: ${position};
    bottom: ${position};
    transition: all ${TRANSITION_DURATION}s ease-in-out, color 0s;
    opacity: ${opacity};
    border: ${border};
    border-radius: 100px;
    padding: 0 ${padding};
    min-width: ${minWidth};
    max-width: 2em;
    height: ${height};
    box-sizing: content-box;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    line-height: ${height === 0 ? '1px' : height}; /* improve animation easing */
    white-space: nowrap;
    font-size: ${fontSize};
    font-weight: ${props.theme.fontWeights.semibold};
    content: ${content};

    ${props.status === STATUS.ACTIVE &&
      css`
        animation: ${animation} ${TRANSITION_DURATION * 1.5}s ease-in-out;
      `}
  `;
};

const colorStyles = props => {
  let statusColor = 'transparent';
  const backgroundColor = props.backgroundColor || 'transparent';
  const foregroundColor = props.foregroundColor || props.theme.palette.white;
  const surfaceColor = props.status
    ? props.surfaceColor || props.theme.colors.background
    : 'transparent';

  if (props.status === STATUS.AVAILABLE) {
    statusColor = getColor('mint', 400, props.theme);
  } else if (props.status === STATUS.ACTIVE) {
    statusColor = getColor('crimson', 400, props.theme);
  } else if (props.status === STATUS.AWAY) {
    statusColor = getColor('yellow', 400, props.theme);
  }

  return css`
    box-shadow: ${props.theme.shadows.sm(statusColor)};
    background-color: ${backgroundColor};
    color: ${surfaceColor};

    & > svg,
    & ${StyledText} {
      color: ${foregroundColor};
    }

    &::after {
      background-color: ${statusColor};
      /* set text color without altering border */
      -webkit-text-fill-color: ${props.theme.palette.white};
    }

    /* stylelint-disable selector-type-no-unknown, selector-no-vendor-prefix */
    _:-ms-input-placeholder,
    &::after {
      /* fallback for IE11 (which will set border) */
      color: ${props.theme.palette.white};
    }
    /* stylelint-enable selector-type-no-unknown, selector-no-vendor-prefix */
  `;
};

const sizeStyles = props => {
  let borderRadius;
  let size;
  let fontSize;
  let svgSize;

  if (props.size === SIZE.EXTRASMALL) {
    borderRadius = props.isSystem ? math(`${props.theme.borderRadii.md} - 1`) : '50%';
    size = math(`${props.theme.space.base} * 6px`);
    fontSize = props.theme.fontSizes.sm;
    svgSize = math(`${props.theme.space.base} * 3px`);
  } else if (props.size === SIZE.SMALL) {
    borderRadius = props.isSystem ? math(`${props.theme.borderRadii.md} - 1`) : '50%';
    size = math(`${props.theme.space.base} * 8px`);
    fontSize = props.theme.fontSizes.md;
    svgSize = math(`${props.theme.space.base} * 3px`);
  } else if (props.size === SIZE.LARGE) {
    borderRadius = props.isSystem ? math(`${props.theme.borderRadii.md} + 1`) : '50%';
    size = math(`${props.theme.space.base} * 12px`);
    fontSize = props.theme.fontSizes.xl;
    svgSize = math(`${props.theme.space.base} * 6px`);
  } else {
    borderRadius = props.isSystem ? props.theme.borderRadii.md : '50%';
    size = math(`${props.theme.space.base} * 10px`);
    fontSize = props.theme.fontSizes.lg;
    svgSize = math(`${props.theme.space.base} * 4px`);
  }

  return css`
    border-radius: ${borderRadius};
    width: ${size};
    height: ${size};

    & > svg {
      font-size: ${svgSize};
    }

    & ${StyledText} {
      line-height: ${size};
      font-size: ${fontSize};
    }
  `;
};

/**
 * Accepts all `<figure>` props
 */
export const StyledAvatar = styled.figure.attrs(() => ({
  'data-garden-id': AVATARS_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
}))`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  transition: box-shadow ${TRANSITION_DURATION}s ease-in-out, color 0.1s ease-in-out;
  margin: 0; /* <figure> reset */
  vertical-align: middle;
  box-sizing: border-box;

  ${props => sizeStyles(props)};
  ${props => colorStyles(props)};

  /* inner ring */
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    transition: box-shadow ${TRANSITION_DURATION}s ease-in-out;
    box-shadow: ${props => `inset 0 0 0 ${props.theme.shadowWidths.sm}`};
    content: '';
  }

  &::before,
  & > img {
    border-radius: inherit;
    width: 100%;
    height: 100%;
  }

  & > img {
    box-sizing: inherit;
    vertical-align: bottom;
  }

  & > svg {
    width: 1em;
    height: 1em;
  }

  &::after {
    ${props => badgeStyles(props)};
  }

  ${props => retrieveComponentStyles(AVATARS_COMPONENT_ID, props)};
`;

StyledAvatar.propTypes = {
  /** Set the avatar background color */
  backgroundColor: PropTypes.string,
  /** Set the color for child SVG or `Avatar.Text` components */
  foregroundColor: PropTypes.string,
  /** Set the color of the surface behind the avatar – used to manipulate the inner status rings */
  surfaceColor: PropTypes.string,
  /** Applies system styling */
  isSystem: PropTypes.bool,
  size: PropTypes.oneOf([SIZE.EXTRASMALL, SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  status: PropTypes.oneOf([STATUS.AVAILABLE, STATUS.ACTIVE, STATUS.AWAY]),
  theme: PropTypes.object
};

StyledAvatar.defaultProps = {
  size: SIZE.MEDIUM,
  theme: DEFAULT_THEME
};
