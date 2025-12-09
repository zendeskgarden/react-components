/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledItemTypeIcon } from './StyledItemTypeIcon.js';
import { StyledOption } from '../combobox/StyledOption.js';

const COMPONENT_ID = 'dropdowns.menu.item_anchor';
const StyledItemAnchor = styled(StyledOption).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  as: 'a'
}).withConfig({
  displayName: "StyledItemAnchor",
  componentId: "sc-b75oa4-0"
})(["text-decoration:none;color:unset;&&:hover{text-decoration:none;color:inherit;}&[aria-current='page'] > ", "{opacity:1;}", ";"], StyledItemTypeIcon, componentStyles);

export { StyledItemAnchor };
