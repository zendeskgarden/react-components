/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledFooterItem } from './StyledFooterItem.js';

const COMPONENT_ID = 'modals.drawer_modal.footer_item';
const StyledDrawerFooterItem = styled(StyledFooterItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDrawerFooterItem",
  componentId: "sc-m2yul4-0"
})(["", ";"], componentStyles);

export { StyledDrawerFooterItem };
