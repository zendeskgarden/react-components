/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.file.close';
const StyledFileClose = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFileClose",
  componentId: "sc-1m31jbf-0"
})(["display:flex;flex-shrink:0;align-items:center;justify-content:center;transition:opacity 0.25s ease-in-out;opacity:0.8;border:none;background:transparent;cursor:pointer;color:", ";appearance:none;&:hover{opacity:0.9;}&:focus{outline:none;}", ";"], props => getColor({
  theme: props.theme,
  variable: 'foreground.subtle'
}), componentStyles);

export { StyledFileClose };
