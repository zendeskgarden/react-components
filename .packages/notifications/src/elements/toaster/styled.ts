/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { hideVisually } from 'polished';
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

import { Placement } from '../../types';

export const TRANSITION_CLASS = 'garden-toast-transition';

const DEFAULT_DURATION = '400ms';

export const StyledFadeInTransition = styled.div<{ $isHidden: boolean; $placement: Placement }>`
  transition: opacity ${DEFAULT_DURATION} ease-in 300ms;
  opacity: ${p => (p.$isHidden ? '0 !important' : 1)};
  margin-bottom: ${p => p.theme.space.base * 2}px;

  ${p => p.$isHidden && hideVisually()}

  &.${TRANSITION_CLASS}-enter {
    transform: translateY(
      ${props => {
        if (
          props.$placement === 'bottom-start' ||
          props.$placement === 'bottom' ||
          props.$placement === 'bottom-end'
        ) {
          return '100px';
        }

        return '-100px';
      }}
    );
    opacity: 0;
    max-height: 0;
  }

  &.${TRANSITION_CLASS}-enter-active {
    transform: translateY(0);
    /* prettier-ignore */
    transition:
      opacity ${DEFAULT_DURATION} ease-in,
      transform ${DEFAULT_DURATION} cubic-bezier(0.15, 0.85, 0.35, 1.2),
      max-height ${DEFAULT_DURATION};
    opacity: 1;
    max-height: 500px;
  }

  &.${TRANSITION_CLASS}-exit {
    opacity: 1;
    max-height: 500px;
  }

  &.${TRANSITION_CLASS}-exit-active {
    /* prettier-ignore */
    transition:
      opacity 550ms ease-out,
      max-height ${DEFAULT_DURATION} linear 150ms;
    opacity: 0;
    max-height: 0;
  }
`;

interface IStyledTransitionContainerProps {
  $toastPlacement: Placement;
  $toastZIndex?: number;
}

const placementStyles = (props: ThemeProps<DefaultTheme> & IStyledTransitionContainerProps) => {
  const verticalDistance = `${props.theme.space.base * 16}px`;
  const horizontalDistance = `${props.theme.space.base * 3}px`;

  const topLeftStyles = css`
    top: ${verticalDistance};
    left: ${horizontalDistance};
  `;

  const topStyles = css`
    top: ${verticalDistance};
    left: 50%;
    transform: translate(-50%, 0);
  `;

  const topRightStyles = css`
    top: ${verticalDistance};
    right: ${horizontalDistance};
  `;

  const bottomLeftStyles = css`
    bottom: ${verticalDistance};
    left: ${horizontalDistance};
  `;

  const bottomStyles = css`
    bottom: ${verticalDistance};
    left: 50%;
    transform: translate(-50%, 0);
  `;

  const bottomRightStyles = css`
    right: ${horizontalDistance};
    bottom: ${verticalDistance};
  `;

  switch (props.$toastPlacement) {
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
    /* istanbul ignore next */
    default:
      return '';
  }
};

export const StyledTransitionContainer = styled.div<IStyledTransitionContainerProps>`
  position: fixed;
  z-index: ${props => props.$toastZIndex};

  ${placementStyles};
`;
