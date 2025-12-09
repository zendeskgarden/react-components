/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { hideVisually } from 'polished';

const TRANSITION_CLASS = 'garden-toast-transition';
const DEFAULT_DURATION = '400ms';
const StyledFadeInTransition = styled.div.withConfig({
  displayName: "styled__StyledFadeInTransition",
  componentId: "sc-nq0usb-0"
})(["transition:opacity ", " ease-in 300ms;opacity:", ";margin-bottom:", "px;", " &.", "-enter{transform:translateY( ", " );opacity:0;max-height:0;}&.", "-enter-active{transform:translateY(0);transition:opacity ", " ease-in,transform ", " cubic-bezier(0.15,0.85,0.35,1.2),max-height ", ";opacity:1;max-height:500px;}&.", "-exit{opacity:1;max-height:500px;}&.", "-exit-active{transition:opacity 550ms ease-out,max-height ", " linear 150ms;opacity:0;max-height:0;}"], DEFAULT_DURATION, p => p.$isHidden ? '0 !important' : 1, p => p.theme.space.base * 2, p => p.$isHidden && hideVisually(), TRANSITION_CLASS, props => {
  if (props.$placement === 'bottom-start' || props.$placement === 'bottom' || props.$placement === 'bottom-end') {
    return '100px';
  }
  return '-100px';
}, TRANSITION_CLASS, DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION, TRANSITION_CLASS, TRANSITION_CLASS, DEFAULT_DURATION);
const placementStyles = props => {
  const verticalDistance = `${props.theme.space.base * 16}px`;
  const horizontalDistance = `${props.theme.space.base * 3}px`;
  const topLeftStyles = css(["top:", ";left:", ";"], verticalDistance, horizontalDistance);
  const topStyles = css(["top:", ";left:50%;transform:translate(-50%,0);"], verticalDistance);
  const topRightStyles = css(["top:", ";right:", ";"], verticalDistance, horizontalDistance);
  const bottomLeftStyles = css(["bottom:", ";left:", ";"], verticalDistance, horizontalDistance);
  const bottomStyles = css(["bottom:", ";left:50%;transform:translate(-50%,0);"], verticalDistance);
  const bottomRightStyles = css(["right:", ";bottom:", ";"], horizontalDistance, verticalDistance);
  switch (props.$toastPlacement) {
    case 'top-start':
      if (props.theme.rtl) {
        return topRightStyles;
      }
      return topLeftStyles;
    case 'top':
      return topStyles;
    case 'top-end':
      if (props.theme.rtl) {
        return topLeftStyles;
      }
      return topRightStyles;
    case 'bottom-start':
      if (props.theme.rtl) {
        return bottomRightStyles;
      }
      return bottomLeftStyles;
    case 'bottom':
      return bottomStyles;
    case 'bottom-end':
      if (props.theme.rtl) {
        return bottomLeftStyles;
      }
      return bottomRightStyles;
    default:
      return '';
  }
};
const StyledTransitionContainer = styled.div.withConfig({
  displayName: "styled__StyledTransitionContainer",
  componentId: "sc-nq0usb-1"
})(["position:fixed;z-index:", ";", ";"], props => props.$toastZIndex, placementStyles);

export { StyledFadeInTransition, StyledTransitionContainer, TRANSITION_CLASS };
