/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled, { css, keyframes, ThemeProps, DefaultTheme } from 'styled-components';
import {
  mediaQuery,
  retrieveComponentStyles,
  DEFAULT_THEME,
  getColor
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.modal';

export interface IStyledModalProps {
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
      animation: ${animationName} 0.3s ease-in;
    `;
  }

  return '';
};

const boxShadow = (props: ThemeProps<DefaultTheme>) => {
  const { theme } = props;
  const { space, shadows } = theme;
  const offsetY = `${space.base * 5}px`;
  const blurRadius = `${space.base * 7}px`;
  const color = getColor({
    theme,
    hue: 'neutralHue',
    shade: 1200,
    light: { transparency: theme.opacity[200] },
    dark: { transparency: theme.opacity[800] }
  });

  return shadows.lg(offsetY, blurRadius, color);
};

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  return css`
    border-color: ${getColor({ theme, variable: 'border.default' })};
    background-color: ${getColor({ theme, variable: 'background.raised' })};
  `;
};

const sizeStyles = (props: IStyledModalProps & ThemeProps<DefaultTheme>) => {
  return css`
    ${mediaQuery('up', props.isLarge ? 'md' : 'sm', props.theme)} {
      width: ${props.isLarge ? props.theme.breakpoints.md : props.theme.breakpoints.sm};
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
  margin: ${props => (props.isCentered ? '0' : `${props.theme.space.base * 12}px`)};
  border: ${props => props.theme.borders.sm};
  border-radius: ${props => props.theme.borderRadii.md};
  box-shadow: ${boxShadow};
  min-height: 60px;
  max-height: calc(100vh - ${props => props.theme.space.base * 24}px);
  overflow: auto;
  direction: ${props => props.theme.rtl && 'rtl'};

  ${animationStyles};

  ${colorStyles};

  ${sizeStyles};

  &:focus {
    outline: none;
  }

  /* stylelint-disable-next-line */
  @media (max-height: 399px) {
    top: ${props => props.theme.space.base * 6}px;
    bottom: auto;
    margin-bottom: ${props => props.theme.space.base * 6}px;
    max-height: none;
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
