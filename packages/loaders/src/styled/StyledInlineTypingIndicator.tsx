/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'loaders.inline';

const PULSE_ANIMATION = keyframes`
  0%, 100% {
    opacity: .2;
  }

  50% {
    opacity: .8;
  }
`;

export const StyledCircle = styled.circle.attrs({
  fill: 'currentColor',
  cy: 2,
  r: 2
})``;

StyledCircle.defaultProps = {
  theme: DEFAULT_THEME
};

export interface IStyledTypingSvgProps extends React.HTMLAttributes<SVGSVGElement> {
  size: number;
  color: string;
}

export const StyledInlineTypingSVG = styled.svg.attrs<IStyledTypingSvgProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  viewBox: '0 0 16 4',
  width: props.size,
  height: props.size * 0.25
}))<IStyledTypingSvgProps>`
  color: ${props => props.color};

  ${StyledCircle} {
    opacity: 0.2;

    &:nth-child(1) {
      animation: ${PULSE_ANIMATION} 1s infinite;
      animation-delay: ${props => (props.theme.rtl ? 'unset' : '0.4s')};
    }

    &:nth-child(2) {
      animation: ${PULSE_ANIMATION} 1s infinite;
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation: ${PULSE_ANIMATION} 1s infinite;
      animation-delay: ${props => (props.theme.rtl ? '0.4s' : 'unset')};
    }
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)}
`;

StyledInlineTypingSVG.defaultProps = {
  theme: DEFAULT_THEME
};
