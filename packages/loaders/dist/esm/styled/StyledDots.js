/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { dotOneKeyframes, dotTwoKeyframes, dotThreeKeyframes } from '../utils/animations.js';

const StyledDotsCircle = styled.circle.attrs({
  cy: 36,
  r: 9
}).withConfig({
  displayName: "StyledDots__StyledDotsCircle",
  componentId: "sc-1ltah7e-0"
})([""]);
const animationStyles = (animationName, props) => {
  return css(["animation:", " ", "ms ", "ms linear infinite;"], animationName, props.$duration, props.$delay);
};
const StyledDotsCircleOne = styled(StyledDotsCircle).attrs({
  cx: 9
}).withConfig({
  displayName: "StyledDots__StyledDotsCircleOne",
  componentId: "sc-1ltah7e-1"
})(["", ";"], props => animationStyles(dotOneKeyframes, props));
const StyledDotsCircleTwo = styled(StyledDotsCircle).attrs(() => ({
  cx: 40
})).withConfig({
  displayName: "StyledDots__StyledDotsCircleTwo",
  componentId: "sc-1ltah7e-2"
})(["", ";"], props => animationStyles(dotTwoKeyframes, props));
const StyledDotsCircleThree = styled(StyledDotsCircle).attrs(() => ({
  cx: 71
})).withConfig({
  displayName: "StyledDots__StyledDotsCircleThree",
  componentId: "sc-1ltah7e-3"
})(["", ";"], props => animationStyles(dotThreeKeyframes, props));

export { StyledDotsCircleOne, StyledDotsCircleThree, StyledDotsCircleTwo };
