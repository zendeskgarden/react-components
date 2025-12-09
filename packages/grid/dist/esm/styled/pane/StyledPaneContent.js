/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$2 = 'pane.content';
const StyledPaneContent = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledPaneContent",
  componentId: "sc-1b38mbh-0"
})(["height:100%;overflow:auto;color-scheme:only ", ";&[hidden]{display:none;}", ";"], p => p.theme.colors.base, componentStyles);

export { StyledPaneContent };
