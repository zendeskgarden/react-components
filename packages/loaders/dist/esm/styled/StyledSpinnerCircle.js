/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';

const StyledSpinnerCircle = styled.circle.attrs(props => ({
  cx: 40,
  cy: 40,
  r: 34,
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeWidth: props.$strokeWidthValue,
  strokeDasharray: `${props.$dasharrayValue} 250`,
  transform: props.transform
})).withConfig({
  displayName: "StyledSpinnerCircle",
  componentId: "sc-o4kd70-0"
})([""]);

export { StyledSpinnerCircle };
