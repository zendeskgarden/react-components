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

/*
 * 1. Overrides flex default `min-height: auto`
 */
export const StyledBrandmarkNavItem = styled(StyledBaseNavItem as 'button').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  order: 1;
  opacity: ${props => props.theme.opacity[400]};
  margin-top: auto;
  min-height: 0; /* [1] */
`;

StyledBrandmarkNavItem.defaultProps = {
  theme: DEFAULT_THEME
};
