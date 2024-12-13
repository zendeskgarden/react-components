/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { getFooterHeight } from '../utils';

const COMPONENT_ID = 'chrome.footer';

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const backgroundColor = getColor({ theme, variable: 'background.default' });
  const borderColor = getColor({ theme, variable: 'border.default' });

  return css`
    border-top-color: ${borderColor};
    background-color: ${backgroundColor};
  `;
};

const sizeStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const border = theme.borders.sm;
  const padding = `0 ${theme.space.base * 9}px`;
  const height = getFooterHeight(theme);

  return css`
    box-sizing: border-box;
    border-top: ${border};
    padding: ${padding};
    height: ${height};
  `;
};

export const StyledFooter = styled.footer.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
