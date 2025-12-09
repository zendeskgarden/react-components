/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';
import { StyledItem } from './StyledItem.js';

const COMPONENT_ID$i = 'dropdowns.add_item';
const StyledAddItem = styled(StyledItem).attrs({
  'data-garden-id': COMPONENT_ID$i,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledAddItem",
  componentId: "sc-mlto71-0"
})(["color:", ";", ";"], props => !props.disabled && getColor({
  theme: props.theme,
  variable: 'foreground.primary'
}), componentStyles);

export { StyledAddItem };
