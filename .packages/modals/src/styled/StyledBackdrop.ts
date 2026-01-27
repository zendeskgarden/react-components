/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const COMPONENT_ID = 'modals.backdrop';

export interface IStyledBackdropProps {
  $isCentered?: boolean;
  $isAnimated?: boolean;
}

const animationName = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const animationStyles = (props: IStyledBackdropProps) => {
  if (props.$isAnimated) {
    return css`
      animation: ${animationName} 0.15s ease-in;
    `;
  }

  return '';
};

/**
 * 1. Smooth iOS scrolling.
 */
export const StyledBackdrop = styled.div.attrs<IStyledBackdropProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledBackdropProps>`
  display: flex;
  position: fixed;
  inset: 0;
  align-items: ${props => props.$isCentered && 'center'};
  justify-content: ${props => props.$isCentered && 'center'};
  z-index: 400;
  background-color: ${({ theme }) =>
    getColor({
      theme,
      hue: 'neutralHue',
      transparency: theme.opacity[1000],
      light: { shade: 900 },
      dark: { shade: 1200 }
    })};
  overflow: auto;
  -webkit-overflow-scrolling: touch; /* [1] */
  font-family: ${props => props.theme.fonts.system};
  direction: ${props => props.theme.rtl && 'rtl'};

  ${animationStyles};

  ${componentStyles};
`;

StyledBackdrop.propTypes = {
  $isCentered: PropTypes.bool,
  $isAnimated: PropTypes.bool
};
