/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { Placement } from '@popperjs/core';
import { arrowStyles, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { getArrowPosition } from '../utils/gardenPlacements';

const COMPONENT_ID = 'modals.tooltip_modal';

export interface IStyledTooltipModalProps {
  hasArrow?: boolean;
  /**
   * All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements)
   */
  placement: Placement;
  isAnimated?: boolean;
  transitionState?: string;
}

/**
 * Accepts all `<div>` props
 *
 * 1. Override arrow parent positioning to ensure arrow is visible beyond block
 *    overflow boundaries.
 */
export const StyledTooltipModal = styled.div.attrs<IStyledTooltipModalProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props.isAnimated && 'is-animated'
}))<IStyledTooltipModalProps>`
  /* stylelint-disable-next-line declaration-no-important */
  position: static !important; /* [1] */

  padding: ${props => props.theme.space.base * 5}px;
  width: 400px;

  ${props => {
    const computedArrowStyles = arrowStyles(getArrowPosition(props.placement), {
      size: `${props.theme.space.base * 2.5}px`,
      inset: `${props.theme.space.base / 2}px`,
      animationModifier: '.is-animated'
    });

    if (props.isAnimated) {
      return props.hasArrow && props.transitionState === 'entered' && computedArrowStyles;
    }

    return props.hasArrow && computedArrowStyles;
  }};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTooltipModal.defaultProps = {
  theme: DEFAULT_THEME
};
