/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { menuStyles, getMenuPosition } from '@zendeskgarden/react-theming';

const StyledTooltipWrapper = styled.div.attrs(props => ({
  className: props.$isAnimated ? 'is-animated' : undefined
})).withConfig({
  displayName: "StyledTooltipWrapper",
  componentId: "sc-1xk05kf-0"
})(["top:0;left:0;", ";"], props => menuStyles(getMenuPosition(props.$placement), {
  theme: props.theme,
  hidden: false,
  zIndex: props.$zIndex,
  animationModifier: '.is-animated'
}));

export { StyledTooltipWrapper };
