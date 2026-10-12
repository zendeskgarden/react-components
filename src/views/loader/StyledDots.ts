/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { keyframes, css } from 'styled-components';

import { dotOneKeyframes, dotTwoKeyframes, dotThreeKeyframes } from '../../utils/loader/animations';

const StyledDotsCircle = styled.circle`
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

export const StyledDotsCircleOne = styled(StyledDotsCircle)<IStyledDotProps>`
  ${props => animationStyles(dotOneKeyframes, props)};
`;

export const StyledDotsCircleTwo = styled(StyledDotsCircle)<IStyledDotProps>`
  ${props => animationStyles(dotTwoKeyframes, props)};
`;

export const StyledDotsCircleThree = styled(StyledDotsCircle)<IStyledDotProps>`
  ${props => animationStyles(dotThreeKeyframes, props)};
`;
