/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';

export const StyledCircle = styled.circle.attrs({
  cx: 9,
  cy: 9,
  r: 9,
  transform: props => props.transform
})`
  will-change: transform;
`;

StyledCircle.propTypes = {
  transform: PropTypes.string
};

export const SpinnerCircle = styled.circle.attrs({
  cx: 40,
  cy: 40,
  r: 34,
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeWidth: ({ strokeWidthValue }) => strokeWidthValue,
  strokeDasharray: ({ dasharrayValue }) => `${dasharrayValue} 250`,
  transform: props => props.transform
})`
  transform-origin: center center;
`;

SpinnerCircle.propTypes = {
  dasharrayValue: PropTypes.string,
  strokeWidthValue: PropTypes.string,
  transform: PropTypes.string
};

const StyledSvg = styled.svg.attrs({
  'data-garden-id': ({ dataGardenId }) => dataGardenId,
  'data-garden-version': PACKAGE_VERSION,
  xmlns: 'http://www.w3.org/2000/svg',
  width: ({ width }) => width,
  height: ({ height }) => height,
  focusable: 'false',
  viewBox: ({ width, height }) => `0 0 ${width} ${height}`,
  role: 'progressbar'
})`
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

export const StyledSVG = ({ children, fontSize, width, height, ...other }) => {
  return (
    <StyledSvg fontSize={fontSize} width={width} height={height} {...other}>
      <g fill="currentColor">{children}</g>
    </StyledSvg>
  );
};

StyledSVG.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.any,
  height: PropTypes.string,
  width: PropTypes.string
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
