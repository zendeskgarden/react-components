/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { getColor, DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.backdrop';

export interface IStyledBackdropProps {
  isCentered?: boolean;
  isAnimated?: boolean;
}

const animationName = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

/**
 * 1. Smooth iOS scrolling.
 */
export const StyledBackdrop = styled.div.attrs<IStyledBackdropProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledBackdropProps>`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: ${props => props.isCentered && 'center'};
  justify-content: ${props => props.isCentered && 'center'};
  z-index: 400;
  background-color: ${props => getColor('neutralHue', 800, props.theme, 0.85)};
  overflow: auto;
  -webkit-overflow-scrolling: touch; /* [1] */
  font-family: ${props => props.theme.fonts.system};
  direction: ${props => props.theme.rtl && 'rtl'};
  animation: ${props =>
    props.isAnimated &&
    css`
      ${animationName} 0.15s ease-in
    `};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledBackdrop.defaultProps = {
  theme: DEFAULT_THEME
};

StyledBackdrop.propTypes = {
  isCentered: PropTypes.bool,
  isAnimated: PropTypes.bool
};
