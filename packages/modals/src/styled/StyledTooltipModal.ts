/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { Placement } from '@floating-ui/react-dom';
import {
  arrowStyles,
  retrieveComponentStyles,
  DEFAULT_THEME,
  getArrowPosition
} from '@zendeskgarden/react-theming';
import { TransitionStatus } from 'react-transition-group';
import { ITooltipModalProps } from '../types';

const COMPONENT_ID = 'modals.tooltip_modal';

export interface IStyledTooltipModalProps
  extends Pick<ITooltipModalProps, 'hasArrow' | 'isAnimated'> {
  placement: Placement;
  transitionState?: TransitionStatus;
}

export const StyledTooltipModal = styled.div.attrs<IStyledTooltipModalProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props.isAnimated && 'is-animated'
}))<IStyledTooltipModalProps>`
  padding: ${props => props.theme.space.base * 5}px;
  width: 400px;

  ${props => {
    const computedArrowStyles = arrowStyles(getArrowPosition(props.theme, props.placement), {
      inset: '0.5px',
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
