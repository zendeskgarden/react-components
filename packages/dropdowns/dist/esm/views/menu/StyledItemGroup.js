/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledOptGroup } from '../combobox/StyledOptGroup.js';

const COMPONENT_ID$3 = 'dropdowns.menu.item_group';
const StyledItemGroup = styled(StyledOptGroup).attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItemGroup",
  componentId: "sc-1umk3cg-0"
})(["", ";"], componentStyles);

export { StyledItemGroup };
