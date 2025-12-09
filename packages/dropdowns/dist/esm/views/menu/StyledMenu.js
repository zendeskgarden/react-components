/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { arrowStyles, componentStyles } from '@zendeskgarden/react-theming';
import { StyledListbox } from '../combobox/StyledListbox.js';

const COMPONENT_ID$9 = 'dropdowns.menu';
const StyledMenu = styled(StyledListbox).attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMenu",
  componentId: "sc-f77ntu-0"
})(["position:static !important;", ";", ";"], props => props.$arrowPosition && arrowStyles(props.$arrowPosition, {
  size: `${props.theme.space.base * 1.5}px`,
  inset: '1px',
  animationModifier: '[data-garden-animate-arrow="true"]'
}), componentStyles);

export { StyledMenu };
