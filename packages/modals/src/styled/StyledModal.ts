/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled, { css, keyframes, ThemeProps, DefaultTheme } from 'styled-components';
import {
  getColor,
  mediaQuery,
  retrieveComponentStyles,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.modal';

export interface IStyledModalProps extends ThemeProps<DefaultTheme> {
  isLarge?: boolean;
  isCentered?: boolean;
  isAnimated?: boolean;
}

const animationName = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    opacity: 1;
  }
`;

const animationStyles = (props: IStyledModalProps) => {
  if (props.isAnimated) {
    return css`
      animation: ${animationName} 0.3s ease-in 0.01s;
    `;
  }

  return '';
};

const colorStyles = (props: IStyledModalProps) => {
  const boxShadow = props.theme.shadows.lg(
    `${props.theme.space.base * 5}px`,
    `${props.theme.space.base * 7}px`,
    getColor('neutralHue', 800, props.theme, 0.35)!
  );

  return css`
    box-shadow: ${boxShadow};
    background-color: ${props.theme.colors.background};
  `;
};

const sizeStyles = (props: IStyledModalProps) => {
  const margin = props.isCentered ? '0' : `${props.theme.space.base * 12}px`;
  const maxHeight = `calc(100vh - ${props.theme.space.base * 24}px)`;

  return css`
    margin: ${margin};
    min-height: 60px;
    max-height: ${maxHeight};

    ${mediaQuery('up', props.isLarge ? 'md' : 'sm', props.theme)} {
      width: ${props.isLarge ? props.theme.breakpoints.md : props.theme.breakpoints.sm};
    }

    /* stylelint-disable-next-line */
    @media (max-height: 399px) {
      top: ${props.theme.space.base * 6}px;
      bottom: auto;
      margin-bottom: ${props.theme.space.base * 6}px;
      max-height: none;
    }
  `;
};

/**
 * 1. IE11 centering hack.
 */
export const StyledModal = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledModalProps>`
  display: flex;
  position: fixed;
  flex-direction: column;
  border-radius: ${props => props.theme.borderRadii.md};
  overflow: auto;
  direction: ${props => props.theme.rtl && 'rtl'};

  ${animationStyles};
  ${sizeStyles};
  ${colorStyles};

  &:focus {
    outline: none;
  }

  /* stylelint-disable-next-line */
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    right: ${props => props.isCentered && '50%'}; /* [1] */
    bottom: ${props => props.isCentered && '50%'}; /* [1] */
    transform: ${props => props.isCentered && 'translate(50%, 50%)'}; /* [1] */
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledModal.propTypes = {
  isLarge: PropTypes.bool,
  isAnimated: PropTypes.bool
};

StyledModal.defaultProps = {
  theme: DEFAULT_THEME
};
