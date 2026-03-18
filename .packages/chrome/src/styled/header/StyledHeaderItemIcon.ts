/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, StyledBaseIcon } from '@zendeskgarden/react-theming';
import styled, { DataAttributes, DefaultTheme, ThemeProps, css } from 'styled-components';

const COMPONENT_ID = 'chrome.header_item_icon';

const sizeStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const margin = `0 ${theme.space.base * 0.75}px`;
  const size = theme.iconSizes.md;

  return css`
    margin: ${margin};
    width: ${size};
    min-width: ${size};
    height: ${size};
  `;
};

export const StyledHeaderItemIcon = styled(StyledBaseIcon).attrs<DataAttributes>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  transition: transform 0.25s ease-in-out;

  ${sizeStyles};

  ${componentStyles};
`;
