/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Placement } from '@floating-ui/react-dom';
import { TransitionStatus } from 'react-transition-group';
import { styled } from 'styled-components';

import arrowStyles from '../../theming/utils/arrowStyles';
import { componentStyles } from '../../theming/utils/componentStyles';
import { getArrowPosition } from '../../theming/utils/getArrowPosition';
import type { WithTheme } from '../../types/views';
import { StyledTooltipDialogClose } from './StyledTooltipDialogClose';
import { StyledTooltipWrapper } from './StyledTooltipWrapper';

export interface IStyledTooltipDialogProps {
  $hasArrow?: boolean;
  $arrowShift?: number;
  $isAnimated?: boolean;
  $placement: Placement;
  $transitionState?: TransitionStatus;
}

/**
 * 1. The wrapper's `menuStyles` rule (`.wrapper > *`) clears the padding and sets the default
 *    radius on the dialog. It has the same specificity as the dialog's own rules, so the
 *    dialog wins only when its view is defined after the wrapper's. Naming the wrapper makes
 *    the import, and so the definition order, explicit. `:where()` keeps the rule at resting
 *    specificity, so `componentStyles` and a consumer's own rules still apply over it.
 */
const sizeStyles = (props: WithTheme) => `
  :where(${StyledTooltipWrapper}) > & { /* [1] */
    border-radius: ${props.theme.borderRadii.xl};
    padding: ${props.theme.space.base * 5}px;
  }

  width: 400px;
  max-width: 100vw;

  &:has(${StyledTooltipDialogClose}) > :first-child {
    padding-${props.theme.rtl ? 'left' : 'right'}: ${props.theme.space.base * 8}px;
  }
`;

export const StyledTooltipDialog = styled.div<WithTheme<IStyledTooltipDialogProps>>`
  ${props => {
    const computedArrowStyles = arrowStyles(getArrowPosition(props.theme, props.$placement), {
      size: `${props.theme.space.base * 2}px`,
      inset: '1px',
      shift: `${props.$arrowShift || 0}px`,
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
