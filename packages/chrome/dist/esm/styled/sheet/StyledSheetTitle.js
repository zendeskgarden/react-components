/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$6 = 'chrome.sheet_title';
const StyledSheetTitle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSheetTitle",
  componentId: "sc-1gogk75-0"
})(["color:", ";font-weight:", ";", ";"], p => getColor({
  theme: p.theme,
  variable: 'foreground.default'
}), props => props.theme.fontWeights.semibold, componentStyles);

export { StyledSheetTitle };
