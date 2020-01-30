/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled, { css, keyframes, ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledFooter } from '../styled';

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

  to {
    opacity: 1;
  }
`;

const animationStyles = css`
  animation-name: ${animationName};
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
`;

const boxShadow = (props: ThemeProps<DefaultTheme>) => {
  const { theme } = props;
  const { space, shadows } = theme;
  const offsetY = `${space.base * 5}px`;
  const blurRadius = `${space.base * 7}px`;
  const color = getColor('neutralHue', 800, theme, 0.35);

  return shadows.lg(offsetY, blurRadius, color as string);
};

const largeFooterStyles = () => css`
  ${StyledFooter} {
    border: ${props => `${props.theme.borders.sm} ${getColor('neutralHue', 200)}`};
    padding: ${props => `${props.theme.space.base * 8}px ${props.theme.space.base * 10}px`};
  }
`;

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
  margin: ${props => (props.isCentered ? '0' : `${props.theme.space.base * 12}px`)};
  border: ${props => `${props.theme.borders.sm} ${getColor('neutralHue', 300)}`};
  border-radius: ${props => props.theme.borderRadii.md};
  border-color: transparent;
  box-shadow: ${boxShadow};
  background-color: ${props => props.theme.colors.background};
  width: ${props => (props.isLarge ? '800px' : '542px')};
  min-height: 60px;
  max-height: calc(100vh - ${props => props.theme.space.base * 24}px);
  overflow: auto;
  direction: ${props => props.theme.rtl && 'rtl'};

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
  @media (max-width: ${props => (props.isLarge ? '799px' : '699px')}) {
    right: ${props => props.theme.rtl && props.theme.space.base * 6}px;
    left: ${props => (props.theme.rtl ? 'auto' : `${props.theme.space.base * 6}px`)};
  }

  /* stylelint-disable-next-line */
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    right: ${props => props.isCentered && '50%'}; /* [1] */
    bottom: ${props => props.isCentered && '50%'}; /* [1] */
    transform: ${props => props.isCentered && 'translate(50%, 50%)'}; /* [1] */
  }

  ${props => props.isLarge && largeFooterStyles()}
  ${props => props.isAnimated && animationStyles}
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledModal.propTypes = {
  isLarge: PropTypes.bool,
  isAnimated: PropTypes.bool
};

StyledModal.defaultProps = {
  theme: DEFAULT_THEME
};
