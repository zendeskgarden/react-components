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

const COMPONENT_ID = 'loaders.dots';

const StyledSvg = styled.svg.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  xmlns: 'http://www.w3.org/2000/svg',
  width: 80,
  height: 72,
  focusable: 'false',
  viewBox: '0 0 80 72',
  role: 'progressbar'
})`
  width: 1em;
  height: 0.9em;
  color: ${props => props.color || 'inherit'};
  font-size: ${props => props.fontSize || 'inherit'};

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

StyledSvg.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.any
};

export const StyledSVG = ({ children, fontSize, ...other }) => {
  return (
    <StyledSvg fontSize={fontSize} {...other}>
      <g fill="currentColor">{children}</g>
    </StyledSvg>
  );
};

StyledSVG.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.any
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
