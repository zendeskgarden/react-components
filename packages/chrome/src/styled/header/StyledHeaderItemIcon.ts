/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.header_item_icon';

/**
 * Applies styling directly to child component
 **/
export const StyledHeaderItemIcon = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  transition: transform 0.25s ease-in-out;
  margin: 0 3px;
  width: ${props => props.theme.iconSizes.md};
  min-width: ${props => props.theme.iconSizes.md};
  height: ${props => props.theme.iconSizes.md};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderItemIcon.defaultProps = {
  theme: DEFAULT_THEME
};
