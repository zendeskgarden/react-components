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
}

/**
 * Accepts all `<div>` props
 */
export const StyledTooltipModal = styled.div.attrs<IStyledTooltipModalProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: 'is-animated'
})<IStyledTooltipModalProps>`
  /* stylelint-disable-next-line declaration-no-important */
  position: static !important; /* [1] */

  padding: ${props => props.theme.space.base * 5}px;
  width: 400px;
  min-height: 150px; /* TODO themify */

  ${props =>
    props.hasArrow &&
    arrowStyles(getArrowPosition(props.placement), {
      size: `${props.theme.space.base * 2}px`,
      inset: `${props.theme.space.base / 2}px`,
      animationModifier: '.is-animated'
    })};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTooltipModal.defaultProps = {
  theme: DEFAULT_THEME
};
