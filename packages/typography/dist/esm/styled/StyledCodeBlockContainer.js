/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { focusStyles, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.codeblock_container';
const StyledCodeBlockContainer = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCodeBlockContainer",
  componentId: "sc-14zgbfw-0"
})(["transition:box-shadow 0.1s ease-in-out;overflow:auto;", " ", ";"], props => focusStyles({
  theme: props.theme
}), componentStyles);

export { StyledCodeBlockContainer };
