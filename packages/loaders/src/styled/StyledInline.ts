/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, keyframes } from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'loaders.inline';

const retrieveAnimation = ({ theme }: ThemeProps<DefaultTheme>) => keyframes`
  0%, 100% {
    opacity: ${theme.opacity[200]};
  }

  50% {
    opacity: ${theme.opacity[600]};
  }
`;

export const StyledCircle = styled.circle.attrs({
  fill: 'currentColor',
  cy: 2,
  r: 2
})`
  /* empty-source */
`;

interface IStyledInlineProps {
  size: number;
  color: string;
}

export const StyledInline = styled.svg.attrs<IStyledInlineProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  viewBox: '0 0 16 4',
  width: props.size,
  height: props.size * 0.25
}))<IStyledInlineProps>`
  color: ${props => props.color};

  ${StyledCircle} {
    opacity: 0.2;

    &:nth-child(1) {
      animation: ${retrieveAnimation} 1s infinite;
      animation-delay: ${props => (props.theme.rtl ? 'unset' : '0.4s')};
    }

    &:nth-child(2) {
      animation: ${retrieveAnimation} 1s infinite;
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation: ${retrieveAnimation} 1s infinite;
      animation-delay: ${props => (props.theme.rtl ? '0.4s' : 'unset')};
    }
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)}
`;
