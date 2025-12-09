/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { arrowStyles, getArrowPosition, componentStyles } from '@zendeskgarden/react-theming';
import { StyledTooltipDialogClose } from './StyledTooltipDialogClose.js';

const COMPONENT_ID$a = 'modals.tooltip_dialog';
const sizeStyles$1 = props => `
  padding: ${props.theme.space.base * 5}px;
  width: 400px;
  
  &:has(${StyledTooltipDialogClose}) > :first-child {
    padding-${props.theme.rtl ? 'left' : 'right'}: ${props.theme.space.base * 8}px;
  }
`;
const StyledTooltipDialog = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '9.12.3',
  className: props.$isAnimated ? 'is-animated' : undefined
})).withConfig({
  displayName: "StyledTooltipDialog",
  componentId: "sc-iv3db-0"
})(["", ";", " ", ";"], props => {
  const computedArrowStyles = arrowStyles(getArrowPosition(props.theme, props.$placement), {
    size: `${props.theme.space.base * 2}px`,
    inset: '1px',
    animationModifier: '.is-animated'
  });
  if (props.$isAnimated) {
    return props.$hasArrow && props.$transitionState === 'entered' && computedArrowStyles;
  }
  return props.$hasArrow && computedArrowStyles;
}, sizeStyles$1, componentStyles);

export { StyledTooltipDialog };
