/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled, { css, keyframes, ThemeProps, DefaultTheme } from 'styled-components';
import { mediaQuery, componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.modal';

export interface IStyledModalProps {
  $isLarge?: boolean;
  $isCentered?: boolean;
  $isAnimated?: boolean;
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
  if (props.$isAnimated) {
    return css`
      animation: ${animationName} 0.3s ease-in;
    `;
  }

  return '';
};

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const offsetY = `${theme.space.base * 5}px`;
  const blurRadius = `${theme.space.base * 7}px`;
  const shadowColor = getColor({ variable: 'shadow.large', theme });
  const shadow = theme.shadows.lg(offsetY, blurRadius, shadowColor);

  const borderColor = getColor({ theme, variable: 'border.default' });
  const backgroundColor = getColor({ theme, variable: 'background.raised' });

  return css`
    border-color: ${borderColor};
    box-shadow: ${shadow};
    background-color: ${backgroundColor};
  `;
};

const sizeStyles = (props: IStyledModalProps & ThemeProps<DefaultTheme>) => {
  return css`
    ${mediaQuery('up', props.$isLarge ? 'md' : 'sm', props.theme)} {
      width: ${props.$isLarge ? props.theme.breakpoints.md : props.theme.breakpoints.sm};
    }
  `;
};

/**
 * 1. IE11 centering hack.
 */
export const StyledModal = styled.div.attrs<IStyledModalProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledModalProps>`
  display: flex;
  position: fixed;
  flex-direction: column;
  animation-delay: 0.01s;
  margin: ${props => (props.$isCentered ? '0' : `${props.theme.space.base * 12}px`)};
  border: ${props => props.theme.borders.sm};
  border-radius: ${props => props.theme.borderRadii.md};
  min-height: 60px;
  max-height: calc(100vh - ${props => props.theme.space.base * 24}px);
  overflow: auto;
  direction: ${props => props.theme.rtl && 'rtl'};

  ${animationStyles};

  ${sizeStyles};

  ${colorStyles};

  &:focus {
    outline: none;
  }

  /* stylelint-disable-next-line */
  @media (max-height: 399px) {
    top: ${props => props.theme.space.base * 6}px;
    bottom: auto;
    margin-bottom: ${props => props.theme.space.base * 6}px;
    max-height: calc(100vh - ${props => props.theme.space.base * 12}px);
  }

  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    right: ${props => props.$isCentered && '50%'}; /* [1] */
    bottom: ${props => props.$isCentered && '50%'}; /* [1] */
    transform: ${props => props.$isCentered && 'translate(50%, 50%)'}; /* [1] */
  }

  ${componentStyles};
`;

StyledModal.propTypes = {
  $isLarge: PropTypes.bool,
  $isAnimated: PropTypes.bool
};
