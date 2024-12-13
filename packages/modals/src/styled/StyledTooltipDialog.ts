/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { Placement } from '@floating-ui/react-dom';
import { arrowStyles, componentStyles, getArrowPosition } from '@zendeskgarden/react-theming';
import { StyledTooltipDialogClose } from '../styled/StyledTooltipDialogClose';
import { TransitionStatus } from 'react-transition-group';

const COMPONENT_ID = 'modals.tooltip_dialog';

export interface IStyledTooltipDialogProps {
  $hasArrow?: boolean;
  $isAnimated?: boolean;
  $placement: Placement;
  $transitionState?: TransitionStatus;
}

const sizeStyles = (props: ThemeProps<DefaultTheme>) => `
  padding: ${props.theme.space.base * 5}px;
  width: 400px;
  
  &:has(${StyledTooltipDialogClose}) > :first-child {
    padding-${props.theme.rtl ? 'left' : 'right'}: ${props.theme.space.base * 8}px;
  }
`;

export const StyledTooltipDialog = styled.div.attrs<IStyledTooltipDialogProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props.$isAnimated ? 'is-animated' : undefined
}))<IStyledTooltipDialogProps>`
  ${props => {
    const computedArrowStyles = arrowStyles(getArrowPosition(props.theme, props.$placement), {
      size: `${props.theme.space.base * 2}px`,
      inset: '1px',
      animationModifier: '.is-animated'
    });

    if (props.$isAnimated) {
      return props.$hasArrow && props.$transitionState === 'entered' && computedArrowStyles;
    }

    return props.$hasArrow && computedArrowStyles;
  }};

  ${sizeStyles}

  ${componentStyles};
`;
