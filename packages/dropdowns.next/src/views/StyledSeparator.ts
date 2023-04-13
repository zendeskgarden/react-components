/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.separator';

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const backgroundColor = getColor('neutralHue', 200, props.theme);

  return css`
    background-color: ${backgroundColor};
  `;
};

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const margin = `${props.theme.space.base}px`;
  const height = props.theme.borderWidths.sm;

  return css`
    margin: ${margin} 0;
    height: ${height};
  `;
};

export const StyledSeparator = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<ThemeProps<DefaultTheme>>`
  border: none;
  cursor: default;

  ${sizeStyles};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSeparator.defaultProps = {
  theme: DEFAULT_THEME
};
