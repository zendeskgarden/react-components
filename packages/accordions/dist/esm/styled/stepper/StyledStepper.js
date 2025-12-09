/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$g = 'accordions.stepper';
const StyledStepper = styled.ol.attrs({
  'data-garden-id': COMPONENT_ID$g,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledStepper",
  componentId: "sc-dsxw0f-0"
})(["display:", ";margin:0;padding:0;list-style:none;", ";"], props => props.$isHorizontal && 'flex', componentStyles);

export { StyledStepper };
