/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledBaseNavItem } from './StyledBaseNavItem';

const COMPONENT_ID = 'chrome.brandmark_nav_list_item';

export const StyledBrandmarkNavItem = styled(StyledBaseNavItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'li'
})`
  flex: 1;
  order: 1;
  opacity: 0.3;
  margin-top: auto;
`;

StyledBrandmarkNavItem.defaultProps = {
  theme: DEFAULT_THEME
};
