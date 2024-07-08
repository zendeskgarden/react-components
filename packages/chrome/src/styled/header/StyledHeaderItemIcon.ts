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
  StyledBaseIcon
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.header_item_icon';

const sizeStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const margin = `0 ${theme.space.base * 0.75}px`;
  const size = theme.iconSizes.md;

  return css`
    width: ${size};
    min-width: ${size};
    height: ${size};
    margin: ${margin};
  `;
};

export const StyledHeaderItemIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  transition: transform 0.25s ease-in-out;

  ${sizeStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderItemIcon.defaultProps = {
  theme: DEFAULT_THEME
};
