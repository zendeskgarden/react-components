/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  getLineHeight,
  getColor,
  focusStyles
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'pagination.page';

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const defaultColor = getColor('neutralHue', 600, props.theme);
  const hoverForegroundColor = getColor('neutralHue', 700, props.theme);
  const hoverBackgroundColor = getColor('primaryHue', 600, props.theme, 0.08);
  const activeForegroundColor = getColor('neutralHue', 800, props.theme);
  const activeBackgroundColor = getColor('primaryHue', 600, props.theme, 0.2);
  const currentForegroundColor = activeForegroundColor;
  const currentBackgroundColor = hoverBackgroundColor;
  const currentHoverBackgroundColor = getColor('primaryHue', 600, props.theme, 0.16);
  const currentActiveBackgroundColor = getColor('primaryHue', 600, props.theme, 0.28);

  return css`
    border: none;
    background: transparent;
    color: ${defaultColor};

    &:hover {
      background-color: ${hoverBackgroundColor};
      color: ${hoverForegroundColor};
    }

    ${focusStyles({
      theme: props.theme,
      inset: true
    })}

    &:active,
    &:focus-visible:active,
    &[data-garden-focus-visible]:active {
      background-color: ${activeBackgroundColor};
      color: ${activeForegroundColor};
    }

    &[aria-current='page'] {
      background-color: ${currentBackgroundColor};
      color: ${currentForegroundColor};
    }

    &[aria-current='page']:hover {
      background-color: ${currentHoverBackgroundColor};
    }

    &[aria-current='page']:active {
      background-color: ${currentActiveBackgroundColor};
    }

    :disabled,
    [aria-disabled='true'] {
      background-color: transparent;
      color: ${getColor('grey', 300, props.theme)};
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
    height: ${height};
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

/**
 * 1. <button> override.
 * 2. Remove dotted outline from Firefox on focus.
 */
export const StyledPageBase = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  box-sizing: border-box;
  display: inline-block;
  /* prettier-ignore */
  transition:
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out;
  visibility: ${props => props.hidden && 'hidden'};
  border-radius: ${props => props.theme.borderRadii.md};
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  font-family: inherit; /* [1] */
  user-select: none;

  ${props => sizeStyles(props)};

  &[aria-current='page'] {
    font-weight: ${props => props.theme.fontWeights.semibold};
  }

  &::-moz-focus-inner {
    border: 0; /* [2] */
  }

  :disabled,
  [aria-disabled='true'] {
    cursor: default;
  }

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPageBase.defaultProps = {
  theme: DEFAULT_THEME
};
