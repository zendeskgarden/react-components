/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_close';

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const backgroundColor = 'primaryHue';
  const foregroundColor = 'neutralHue';

  return css`
    background-color: transparent;
    color: ${getColor(foregroundColor, 600, props.theme)};

    &:hover {
      background-color: ${getColor(backgroundColor, 600, props.theme, 0.08)};
      color: ${getColor(foregroundColor, 700, props.theme)};
    }

    &[data-garden-focus-visible] {
      box-shadow: ${props.theme.shadows.md(
        getColor(backgroundColor, 600, props.theme, 0.35) as string
      )};
    }

    &:active {
      /* prettier-ignore */
      transition:
        background-color 0.1s ease-in-out,
        color 0.1s ease-in-out;
      background-color: ${getColor(backgroundColor, 600, props.theme, 0.2)};
      color: ${getColor(foregroundColor, 800, props.theme)};
    }
  `;
};

export const StyledSheetClose = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<ThemeProps<DefaultTheme>>`
  display: flex;
  position: absolute;
  top: ${props => props.theme.space.base * 2.5}px;
  ${props => (props.theme.rtl ? 'left' : 'right')}: ${props => `${props.theme.space.base * 2}px`};
  align-items: center;
  justify-content: center;
  /* prettier-ignore */
  transition:
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  width: ${props => props.theme.space.base * 10}px;
  height: ${props => props.theme.space.base * 10}px;
  overflow: hidden;
  text-decoration: none;
  font-size: 0;
  user-select: none;

  &::-moz-focus-inner {
    border: 0; /* [1] */
  }

  &:focus {
    outline: none;
  }

  ${props => colorStyles(props)};

  & > svg {
    vertical-align: middle;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetClose.defaultProps = {
  theme: DEFAULT_THEME
};
