/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import { dotOneKeyframes, dotTwoKeyframes, dotThreeKeyframes } from '../utils/animations';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

const StyledDotsCircle = styled.circle.attrs({
  cy: 36,
  r: 9
})``;

StyledDotsCircle.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledDotProps {
  duration: number;
}

export const StyledDotsCircleOne = styled(StyledDotsCircle).attrs({
  cx: 9
})<IStyledDotProps>`
  animation: ${({ duration }) =>
    css`
      ${dotOneKeyframes} ${duration}ms linear infinite
    `};
`;

StyledDotsCircleOne.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledDotsCircleTwo = styled(StyledDotsCircle).attrs(() => ({
  cx: 40
}))<IStyledDotProps>`
  animation: ${({ duration }) =>
    css`
      ${dotTwoKeyframes} ${duration}ms linear infinite
    `};
`;

StyledDotsCircleTwo.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledDotsCircleThree = styled(StyledDotsCircle).attrs(() => ({
  cx: 71
}))<IStyledDotProps>`
  animation: ${({ duration }) =>
    css`
      ${dotThreeKeyframes} ${duration}ms linear infinite
    `};
`;

StyledDotsCircleThree.defaultProps = {
  theme: DEFAULT_THEME
};
