/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { Keyframes, css } from 'styled-components';
import { dotOneKeyframes, dotTwoKeyframes, dotThreeKeyframes } from '../utils/animations';

const StyledDotsCircle = styled.circle.attrs({
  cy: 36,
  r: 9
})`
  /* empty-source */
`;

interface IStyledDotProps {
  duration: number;
}

const animationStyles = (animationName: Keyframes, props: IStyledDotProps) => {
  return css`
    animation: ${animationName} ${props.duration}ms linear infinite;
  `;
};

export const StyledDotsCircleOne = styled(StyledDotsCircle).attrs({
  cx: 9
})<IStyledDotProps>`
  ${props => animationStyles(dotOneKeyframes, props)};
`;

export const StyledDotsCircleTwo = styled(StyledDotsCircle).attrs(() => ({
  cx: 40
}))<IStyledDotProps>`
  ${props => animationStyles(dotTwoKeyframes, props)};
`;

export const StyledDotsCircleThree = styled(StyledDotsCircle).attrs(() => ({
  cx: 71
}))<IStyledDotProps>`
  ${props => animationStyles(dotThreeKeyframes, props)};
`;
