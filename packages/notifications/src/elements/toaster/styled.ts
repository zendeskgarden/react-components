/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { hideVisually } from 'polished';
import { TransitionGroup } from 'react-transition-group';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { ToastPlacement } from './reducer';

export const TRANSITION_CLASS = 'garden-toast-transition';

export const StyledFadeInTransition = styled.div<{ isHidden: boolean; placement: ToastPlacement }>`
  transition: opacity 400ms ease-in 200ms;
  opacity: ${p => (p.isHidden ? '0 !important' : 1)};
  margin-bottom: ${p => p.theme.space.base * 2}px;

  ${p => p.isHidden && hideVisually()}

  &.${TRANSITION_CLASS}-enter {
    /* stylelint-disable */
    transform: translateY(
      ${props => {
        if (
          props.placement === 'bottom-start' ||
          props.placement === 'bottom' ||
          props.placement === 'bottom-end'
        ) {
          return '100px';
        }

        return '-100px';
      }}
    );
    /* stylelint-enable */
    opacity: 0;
    max-height: 0;
  }

  &.${TRANSITION_CLASS}-enter-active {
    transform: translateY(0);
    /* prettier-ignore */
    transition:
      opacity 400ms ease-in,
      transform 400ms cubic-bezier(0.15, 0.85, 0.35, 1.2),
      max-height 400ms;
    opacity: 1;
    max-height: 500px;
  }

  &.${TRANSITION_CLASS}-exit {
    transform: translateY(0);
    opacity: 1;
    max-height: 500px;
  }

  &.${TRANSITION_CLASS}-exit-active {
    /* stylelint-disable */
    transform: translateY(
      ${props => {
        if (
          props.placement === 'bottom-start' ||
          props.placement === 'bottom' ||
          props.placement === 'bottom-end'
        ) {
          return '100px';
        }

        return '-100px';
      }}
    );
    /* stylelint-enable */
    /* prettier-ignore */
    transition:
      opacity 400ms ease-out,
      transform 200ms ease-in 200ms,
      max-height 400ms ease-in-out;
    opacity: 0;
    max-height: 0;
  }
`;

StyledFadeInTransition.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledTransitionGroupProps {
  $placement: ToastPlacement;
  $zIndex?: number;
}

const placementStyles = (props: ThemeProps<DefaultTheme> & IStyledTransitionGroupProps) => {
  const distance = `${props.theme.space.base * 10}px`;

  const topLeftStyles = css`
    top: ${distance};
    left: ${distance};
  `;

  const topStyles = css`
    top: ${distance};
    left: 50%;
    transform: translate(-50%, 0);
  `;

  const topRightStyles = css`
    top: ${distance};
    right: ${distance};
  `;

  const bottomLeftStyles = css`
    bottom: ${distance};
    left: ${distance};
  `;

  const bottomStyles = css`
    bottom: ${distance};
    left: 50%;
    transform: translate(-50%, 0);
  `;

  const bottomRightStyles = css`
    right: ${distance};
    bottom: ${distance};
  `;

  switch (props.$placement) {
    case 'top-start':
      if (props.theme.rtl) {
        return topRightStyles;
      }

      return topLeftStyles;
    case 'top':
      return topStyles;
    case 'top-end':
      if (props.theme.rtl) {
        return topLeftStyles;
      }

      return topRightStyles;
    case 'bottom-start':
      if (props.theme.rtl) {
        return bottomRightStyles;
      }

      return bottomLeftStyles;
    case 'bottom':
      return bottomStyles;
    case 'bottom-end':
      if (props.theme.rtl) {
        return bottomLeftStyles;
      }

      return bottomRightStyles;
    default:
      return '';
  }
};

export const StyledTransitionGroup = styled(TransitionGroup)<IStyledTransitionGroupProps>`
  position: fixed;
  z-index: ${props => props.$zIndex};

  ${placementStyles};
`;

StyledTransitionGroup.defaultProps = {
  theme: DEFAULT_THEME
};
