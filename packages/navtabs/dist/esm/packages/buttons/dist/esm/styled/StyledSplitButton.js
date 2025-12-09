/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'buttons.button_group_view';
const StyledSplitButton = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.7.1'
}).withConfig({
  displayName: "StyledSplitButton",
  componentId: "sc-1u4v04v-0"
})(["display:inline-flex;position:relative;z-index:0;direction:", ";white-space:nowrap;", ";"], props => props.theme.rtl && 'rtl', componentStyles);

export { StyledSplitButton };
