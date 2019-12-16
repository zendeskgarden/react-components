/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.nav_item_icon';

/**
 * Applies styling directly to child component
 **/
export const StyledNavItemIcon = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  align-self: flex-start;
  order: 0;
  border-radius: ${props => props.theme.borderRadii.md};
  width: ${props => props.theme.iconSizes.lg};
  height: ${props => props.theme.iconSizes.lg};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledNavItemIcon.defaultProps = {
  theme: DEFAULT_THEME
};
