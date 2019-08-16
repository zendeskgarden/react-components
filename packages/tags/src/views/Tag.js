/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import { math, stripUnit } from 'polished';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getColor, isRtl, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import DEFAULT_THEME from '@zendeskgarden/react-theming/src/theme';

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

  if (props.hue) {
    const shade = props.hue === 'yellow' ? 400 : 600;

    backgroundColor = getColor(props.hue, shade, props.theme);
    boxShadowColor = getColor(props.hue, shade, props.theme, 0.35);

    if (props.hue === 'yellow' || props.hue === 'lemon') {
      foregroundColor = getColor('yellow', 800, props.theme);
    } else {
      foregroundColor = getColor('white');
    }
  } else {
    backgroundColor = getColor('neutralHue', 200, props.theme);
    boxShadowColor = getColor('neutralHue', 600, props.theme, 0.35);
    foregroundColor = getColor('neutralHue', 700, props.theme);
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
  `;
};

const sizeStyles = props => {
  let borderRadius;
  let padding;
  let height;
  let fontSize;
  let minWidth;

  if (props.size === SIZE.SMALL) {
    borderRadius = props.theme.borderRadii.sm;
    padding = props.theme.space.base;
    height = props.theme.space.base * 4;
    fontSize = props.theme.fontSizes.xs;
  } else if (props.size === SIZE.LARGE) {
    borderRadius = props.theme.borderRadii.md;
    padding = props.theme.space.base * 3;
    height = props.theme.space.base * 8;
    fontSize = props.theme.fontSizes.sm;
  } else {
    borderRadius = props.theme.borderRadii.sm;
    padding = props.theme.space.base * 2;
    height = props.theme.space.base * 5;
    fontSize = props.theme.fontSizes.sm;
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

  return css`
    border-radius: ${borderRadius};
    padding: 0 ${math(`${padding} * 1px`)};
    min-width: ${minWidth && math(`${minWidth} * 1px`)};
    height: ${math(`${height} * 1px`)};
    line-height: ${math(`${height} / ${stripUnit(fontSize)}`)};
    font-size: ${fontSize};

    & > * {
      min-width: ${minWidth ? math(`${minWidth - padding * 2} * 1px`) : '2em'};
      text-align: ${props.round && 'center'};
    }
  `;
};

/**
 * Accepts all `<div>` props
 */
const Tag = styled.div.attrs(props => ({
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

  &:any-link:hover {
    cursor: pointer;
  }

  &.focus-visible {
    text-decoration: none;
  }

  ${props => colorStyles(props)};

  & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

Tag.propTypes = {
  hue: PropTypes.string,
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  pill: PropTypes.bool,
  round: PropTypes.bool,
  focused: PropTypes.bool,
  theme: PropTypes.object
};

Tag.defaultProps = {
  size: SIZE.MEDIUM,
  theme: DEFAULT_THEME
};

/** @component */
export default Tag;
