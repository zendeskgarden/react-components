/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tabs.tabs';
const StyledTabs = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTabs",
  componentId: "sc-1qaor65-0"
})(["display:", ";overflow:hidden;direction:", ";", ";"], props => props.$isVertical ? 'table' : 'block', props => props.theme.rtl && 'rtl', componentStyles);

export { StyledTabs };
