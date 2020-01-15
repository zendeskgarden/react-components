/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import math from 'polished/lib/math/math';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  getLineHeight,
  getColor
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'pagination.page';

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const foregroundColor = getColor('neutralHue', 600, props.theme);
  const hoverForegroundColor = getColor('neutralHue', 800, props.theme);
  const hoverBackgroundColor = getColor('neutralHue', 600, props.theme, 0.15);
  const boxShadowColor = getColor('primaryHue', 600, props.theme, 0.35);
  const activeBackgroundColor = getColor('neutralHue', 600, props.theme, 0.25);
  const currentForegroundColor = hoverForegroundColor;
  const currentBackgroundColor = hoverBackgroundColor;

  return css`
    color: ${foregroundColor};

    &:hover {
      background-color: ${hoverBackgroundColor};
      color: ${hoverForegroundColor};
    }

    &[data-garden-focus-visible] {
      box-shadow: inset ${props.theme.shadows.md(boxShadowColor!)};
    }

    &:active {
      background-color: ${activeBackgroundColor};
    }

    &[aria-current='true'] {
      background-color: ${currentBackgroundColor};
      color: ${currentForegroundColor};
    }
  `;
};

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const fontSize = props.theme.fontSizes.md;
  const height = `${props.theme.space.base * 8}px`;
  const lineHeight = getLineHeight(height, fontSize);
  const padding = `${props.theme.space.base * 1.5}px`;

  return css`
    padding: 0 ${padding};
    min-width: ${height};
    max-width: ${math(`${height} * 2`)}; /* [1] */
    height: ${height};
    line-height: ${lineHeight};
    font-size: ${fontSize};

    &[aria-current='true'] {
      max-width: none;
    }
  `;
};

/**
 * 1. Text truncation.
 */
export const StyledPage = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  box-sizing: border-box;
  display: inline-block;
  transition: box-shadow 0.1s ease-in-out, color 0.25s ease-in-out;
  margin-left: ${props => `${props.theme.space.base}px`};
  border-radius: ${props => props.theme.borderRadii.md};
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  user-select: none;

  ${props => sizeStyles(props)};

  &:hover {
    transition: background-color 0.25s ease-in-out;
  }

  &:focus {
    outline: none;
  }

  &[aria-current='true'] {
    font-weight: ${props => props.theme.fontWeights.semibold};
  }

  ${props => colorStyles(props)};

  &[hidden] {
    visibility: hidden;
  }

  &${props => (props.theme.rtl ? ':first-of-type' : ':last-of-type')} {
    margin-left: 0;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPage.defaultProps = {
  theme: DEFAULT_THEME
};
