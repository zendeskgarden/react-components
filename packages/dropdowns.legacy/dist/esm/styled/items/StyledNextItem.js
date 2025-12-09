/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledItem } from './StyledItem.js';
import { StyledItemIcon } from './StyledItemIcon.js';

const COMPONENT_ID = 'dropdowns.next_item';
const StyledNextItem = styled(StyledItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledNextItem",
  componentId: "sc-1wrjlge-0"
})(["", "{right:", ";left:", ";}", ";"], StyledItemIcon, props => props.theme.rtl ? 'auto' : `${props.theme.space.base * 3}px`, props => props.theme.rtl ? `${props.theme.space.base * 3}px` : 'auto', componentStyles);

export { StyledNextItem };
