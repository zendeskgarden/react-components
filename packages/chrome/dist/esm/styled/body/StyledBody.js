/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$t = 'chrome.body';
const StyledBody = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$t,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBody",
  componentId: "sc-c7h9kv-0"
})(["flex:1;order:1;background-color:", ";min-width:0;", ";"], props => getColor({
  theme: props.theme,
  variable: 'background.default'
}), componentStyles);

export { StyledBody };
