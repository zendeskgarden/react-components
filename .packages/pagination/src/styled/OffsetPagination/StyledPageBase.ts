/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  componentStyles,
  getLineHeight,
  focusStyles,
  getColor
} from '@zendeskgarden/react-theming';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';

const COMPONENT_ID = 'pagination.page';

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const disabledColor = getColor({ variable: 'foreground.disabled', theme });
  const defaultColor = getColor({ variable: 'foreground.subtle', theme });
  const hoverForegroundColor = getColor({
    variable: 'foreground.subtle',
    light: { offset: 100 },
    dark: { offset: -100 },
    theme
  });
  const hoverBackgroundColor = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[100],
    dark: { offset: -100 },
    theme
  });
  const activeForegroundColor = getColor({
    variable: 'foreground.subtle',
    light: { offset: 200 },
    dark: { offset: -200 },
    theme
  });
  const activeBackgroundColor = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[200],
    dark: { offset: -100 },
    theme
  });

  // selected page
  const currentForegroundColor = activeForegroundColor;
  const currentBackgroundColor = hoverBackgroundColor;
  const currentHoverBackgroundColor = activeBackgroundColor;
  const currentActiveBackgroundColor = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[300],
    dark: { offset: -100 },
    theme
  });

  return css`
    border: none;
    background: transparent;
    color: ${defaultColor};

    &:hover {
      background-color: ${hoverBackgroundColor};
      color: ${hoverForegroundColor};
    }

    ${focusStyles({
      theme,
      inset: true
    })}

    &:active,
    &:focus-visible:active {
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

    /* stylelint-disable-next-line no-descending-specificity */
    &:disabled,
    &[aria-disabled='true'] {
      background-color: transparent;
      color: ${disabledColor};
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

  &:disabled,
  [aria-disabled='true'] {
    cursor: default;
  }

  ${props => colorStyles(props)};

  ${componentStyles};
`;
