/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';

import { dotOneKeyframes, dotTwoKeyframes, dotThreeKeyframes } from './utils/animations';

const DotsCircle = styled.circle.attrs(() => ({
  cy: 36,
  r: 9
}))``;

export const DotsOneCircle = styled(DotsCircle).attrs(() => ({
  cx: 9
}))`
  animation: ${({ duration }) =>
    css`
      ${dotOneKeyframes} ${duration}ms linear infinite
    `};
`;

export const DotsTwoCircle = styled(DotsCircle).attrs(() => ({
  cx: 40
}))`
  animation: ${({ duration }) =>
    css`
      ${dotTwoKeyframes} ${duration}ms linear infinite
    `};
`;

export const DotsThreeCircle = styled(DotsCircle).attrs(() => ({
  cx: 71
}))`
  animation: ${({ duration }) =>
    css`
      ${dotThreeKeyframes} ${duration}ms linear infinite
    `};
`;

export const SpinnerCircle = styled.circle.attrs(props => ({
  cx: 40,
  cy: 40,
  r: 34,
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeWidth: props.strokeWidthValue,
  strokeDasharray: `${props.dasharrayValue} 250`,
  transform: props.transform
}))``;

SpinnerCircle.propTypes = {
  dasharrayValue: PropTypes.string,
  strokeWidthValue: PropTypes.string,
  transform: PropTypes.string
};

const StyledSvg = styled.svg.attrs(props => ({
  'data-garden-id': ({ dataGardenId }) => dataGardenId,
  'data-garden-version': PACKAGE_VERSION,
  xmlns: 'http://www.w3.org/2000/svg',
  width: props.width,
  height: props.height,
  focusable: 'false',
  viewBox: `0 0 ${props.width} ${props.height}`,
  role: 'progressbar'
}))`
  width: 1em;
  height: 0.9em;
  color: ${props => props.color || 'inherit'};
  font-size: ${props => props.fontSize || 'inherit'};

  ${props => retrieveTheme(props.dataGardenId, props)};
`;

StyledSvg.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.any
};

export const StyledSVG = React.forwardRef(
  ({ children, fontSize, width, height, ...other }, ref) => {
    return (
      <StyledSvg fontSize={fontSize} width={width} height={height} ref={ref} {...other}>
        {children}
      </StyledSvg>
    );
  }
);

StyledSVG.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.any,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export const LoadingPlaceholder = styled.div.attrs({
  role: 'progressbar'
})`
  display: inline;
  width: 1em;
  height: 0.9em;
  font-size: ${props => props.fontSize};
`;

LoadingPlaceholder.propTypes = {
  fontSize: PropTypes.any
};
