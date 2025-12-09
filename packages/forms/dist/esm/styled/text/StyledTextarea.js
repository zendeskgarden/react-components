/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledTextInput } from './StyledTextInput.js';

const COMPONENT_ID$y = 'forms.textarea';
const hiddenStyles = `
  visibility: hidden;
  position: absolute;
  overflow: hidden;
  height: 0;
  top: 0;
  left: 0;
  transform: translateZ(0);
`;
const StyledTextarea = styled(StyledTextInput).attrs({
  as: 'textarea',
  'data-garden-id': COMPONENT_ID$y,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTextarea",
  componentId: "sc-wxschl-0"
})(["resize:", ";overflow:auto;", ";", ";"], props => props.$isResizable ? 'vertical' : 'none', props => props.$isHidden && hiddenStyles, componentStyles);

export { StyledTextarea };
