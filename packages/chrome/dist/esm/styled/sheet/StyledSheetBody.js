/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_body';
const StyledSheetBody = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSheetBody",
  componentId: "sc-bt4eoj-0"
})(["flex:1;overflow-y:auto;padding:", "px;color-scheme:only ", ";", ";"], props => props.theme.space.base * 5, p => p.theme.colors.base, componentStyles);

export { StyledSheetBody };
