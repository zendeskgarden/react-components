/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { keyframes, css } from 'styled-components';

import { dotOneKeyframes, dotTwoKeyframes, dotThreeKeyframes } from '../utils/animations';

// MIGRATE(component-ids): .attrs with non-data props — move to the base tag, element JSX or default parameters
const StyledDotsCircle = styled.circle.attrs({
  cy: 36,
  r: 9
})`
  /* empty-source */
`;

interface IStyledDotProps {
  $duration: number;
  $delay: number;
}

const animationStyles = (animationName: ReturnType<typeof keyframes>, props: IStyledDotProps) => {
  return css`
    animation: ${animationName} ${props.$duration}ms ${props.$delay}ms linear infinite;
  `;
};

// MIGRATE(component-ids): .attrs with non-data props — move to the base tag, element JSX or default parameters
export const StyledDotsCircleOne = styled(StyledDotsCircle).attrs({
  cx: 9
})<IStyledDotProps>`
  ${props => animationStyles(dotOneKeyframes, props)};
`;

// MIGRATE(component-ids): .attrs with non-data props — move to the base tag, element JSX or default parameters
export const StyledDotsCircleTwo = styled(StyledDotsCircle).attrs(() => ({
  cx: 40
}))<IStyledDotProps>`
  ${props => animationStyles(dotTwoKeyframes, props)};
`;

// MIGRATE(component-ids): .attrs with non-data props — move to the base tag, element JSX or default parameters
export const StyledDotsCircleThree = styled(StyledDotsCircle).attrs(() => ({
  cx: 71
}))<IStyledDotProps>`
  ${props => animationStyles(dotThreeKeyframes, props)};
`;
