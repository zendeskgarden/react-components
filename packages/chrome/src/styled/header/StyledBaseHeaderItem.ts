/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import {
  DEFAULT_THEME,
  retrieveComponentStyles,
  getLineHeight
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.base_header_item';

export interface IStyledBaseHeaderItemProps {
  maxX?: boolean;
  maxY?: boolean;
  isRound?: boolean;
}

export const getHeaderItemSize = (props: ThemeProps<DefaultTheme>) =>
  `${props.theme.space.base * 7.5}px`;

const sizeStyles = (props: IStyledBaseHeaderItemProps & ThemeProps<DefaultTheme>) => {
  const size = props.theme.space.base * 7.5;

  return css`
    padding: 0 3px;
    min-width: ${size}px;
    height: ${props.maxY ? '100%' : `${size}px`};
    line-height: ${getLineHeight(size, props.theme.fontSizes.md)};
  `;
};

/**
 * 1. Reset the stacking context for embedded menus
 * 2. Button element reset
 */
export const StyledBaseHeaderItem = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledBaseHeaderItemProps>`
  display: inline-flex;
  position: relative;
  flex: ${props => props.maxX && '1'};
  align-items: center;
  justify-content: ${props => (props.maxX ? 'start' : 'center')};
  order: 1;
  transition:
    box-shadow 0.1s ease-in-out,
    color 0.1s ease-in-out;
  z-index: 0; /* [1] */
  margin: ${props => `0 ${props.theme.space.base * 3}px`};
  border: none; /* [2] */
  border-radius: ${props => {
    if (props.isRound) {
      return '100%';
    }

    if (props.maxY) {
      return '0';
    }

    return props.theme.borderRadii.md;
  }};
  background: transparent; /* [2] */
  text-decoration: none;
  white-space: nowrap;
  color: inherit;
  font-size: inherit; /* [2] */

  ${sizeStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledBaseHeaderItem.defaultProps = {
  theme: DEFAULT_THEME
};
