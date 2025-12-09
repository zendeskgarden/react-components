/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getLineHeight, getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_description';
const StyledSheetDescription = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSheetDescription",
  componentId: "sc-1puglb6-0"
})(["line-height:", ";color:", ";", ";"], p => getLineHeight(p.theme.space.base * 4, p.theme.fontSizes.md), p => getColor({
  theme: p.theme,
  variable: 'foreground.subtle'
}), componentStyles);

export { StyledSheetDescription };
