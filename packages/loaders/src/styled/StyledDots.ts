/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { Keyframes, css } from 'styled-components';
import { dotOneKeyframes, dotTwoKeyframes, dotThreeKeyframes } from '../utils/animations';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

const StyledDotsCircle = styled.circle.attrs({
  cy: 36,
  r: 9
})`
  /* stylelint-disable no-empty-source */
`;

StyledDotsCircle.defaultProps = {
  theme: DEFAULT_THEME
};

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

StyledDotsCircleOne.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledDotsCircleTwo = styled(StyledDotsCircle).attrs(() => ({
  cx: 40
}))<IStyledDotProps>`
  ${props => animationStyles(dotTwoKeyframes, props)};
`;

StyledDotsCircleTwo.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledDotsCircleThree = styled(StyledDotsCircle).attrs(() => ({
  cx: 71
}))<IStyledDotProps>`
  ${props => animationStyles(dotThreeKeyframes, props)};
`;

StyledDotsCircleThree.defaultProps = {
  theme: DEFAULT_THEME
};
