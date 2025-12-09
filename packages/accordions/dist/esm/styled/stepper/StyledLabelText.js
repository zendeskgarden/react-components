/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';

const COMPONENT_ID$d = 'accordions.step_label_text';
const StyledLabelText = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$d,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledLabelText",
  componentId: "sc-111m5zo-0"
})(["display:", ";padding:", ";word-wrap:", ";"], props => props.$isHidden && 'none', props => props.$isHorizontal && `0 ${props.theme.space.base * 3}px`, props => props.$isHorizontal && 'break-word');

export { StyledLabelText };
