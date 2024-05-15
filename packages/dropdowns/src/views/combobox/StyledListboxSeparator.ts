/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.combobox.separator';

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const backgroundColor = getColor({ theme, variable: 'border.subtle' });

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

export const StyledListboxSeparator = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  cursor: default;

  ${sizeStyles};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledListboxSeparator.defaultProps = {
  theme: DEFAULT_THEME
};
