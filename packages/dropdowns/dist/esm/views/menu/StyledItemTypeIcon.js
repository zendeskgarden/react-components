/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledOptionTypeIcon } from '../combobox/StyledOptionTypeIcon.js';
import { StyledItem } from './StyledItem.js';

const COMPONENT_ID$6 = 'dropdowns.menu.item.type_icon';
const StyledItemTypeIcon = styled(StyledOptionTypeIcon).attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItemTypeIcon",
  componentId: "sc-1pll3nu-0"
})(["", "[aria-checked='true'] > &{opacity:1;}", ";"], StyledItem, componentStyles);

export { StyledItemTypeIcon };
