/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, StyledBaseIcon } from '@zendeskgarden/react-theming';
import styled, { DataAttributes, DefaultTheme, ThemeProps, css } from 'styled-components';

const COMPONENT_ID = 'chrome.nav_item_icon';

const sizeStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const size = theme.iconSizes.lg;

  return css`
    width: ${size};
    height: ${size};
  `;
};

export const StyledNavItemIcon = styled(StyledBaseIcon).attrs<DataAttributes>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  align-self: flex-start;
  order: 0;
  border-radius: ${props => props.theme.borderRadii.md};

  ${sizeStyles};

  ${componentStyles};
`;
