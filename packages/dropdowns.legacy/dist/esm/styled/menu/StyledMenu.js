/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { arrowStyles, componentStyles } from '@zendeskgarden/react-theming';
import { getArrowPosition } from '../../utils/garden-placements.js';

const COMPONENT_ID$m = 'dropdowns.menu';
const StyledMenu = styled.ul.attrs(props => ({
  'data-garden-id': COMPONENT_ID$m,
  'data-garden-version': '9.12.3',
  className: props.$isAnimated ? 'is-animated' : undefined
})).withConfig({
  displayName: "StyledMenu",
  componentId: "sc-lzt5u6-0"
})(["position:static !important;max-height:", ";overflow-y:auto;", ";", ";"], props => props.$maxHeight, props => props.$hasArrow && arrowStyles(getArrowPosition(props.$placement), {
  size: `${props.theme.space.base * 1.5}px`,
  inset: '1px',
  animationModifier: props.$isAnimated ? '.is-animated' : undefined
}), componentStyles);

export { StyledMenu };
