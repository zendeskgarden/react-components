/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  getColor,
  getLineHeight
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tabs.tablist';

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const border = getColor({ theme, variable: 'border.default' });
  const color = getColor({ theme, variable: 'background.neutral' });

  return css`
    border-bottom-color: ${border};
    color: ${color};
  `;
};

/**
 * 1. List element reset.
 */
const sizeStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const margin = `${theme.space.base * 5}px`;
  const border = theme.borders.sm;
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(theme.space.base * 5, fontSize);

  return css`
    margin-top: 0; /* [1] */
    margin-bottom: ${margin};
    border-bottom: ${border};
    padding: 0; /* [1] */
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

export const StyledTabList = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: block;
  white-space: nowrap;

  ${sizeStyles};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTabList.defaultProps = {
  theme: DEFAULT_THEME
};
