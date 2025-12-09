/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { StyledBaseNavItem } from './StyledBaseNavItem.js';

const COMPONENT_ID = 'chrome.brandmark_nav_list_item';
const StyledBrandmarkNavItem = styled(StyledBaseNavItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBrandmarkNavItem",
  componentId: "sc-8kynd4-0"
})(["order:1;opacity:", ";margin-top:auto;min-height:0;"], props => props.theme.opacity[400]);

export { StyledBrandmarkNavItem };
