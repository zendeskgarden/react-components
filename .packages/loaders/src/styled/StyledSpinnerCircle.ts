/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

interface IStyledSpinnerCircleProps {
  $dasharrayValue: number;
  $strokeWidthValue: number;
  transform: string;
}

export const StyledSpinnerCircle = styled.circle.attrs<IStyledSpinnerCircleProps>(props => ({
  cx: 40,
  cy: 40,
  r: 34,
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeWidth: props.$strokeWidthValue,
  strokeDasharray: `${props.$dasharrayValue} 250`,
  transform: props.transform
}))<IStyledSpinnerCircleProps>`
  /* empty-source */
`;
