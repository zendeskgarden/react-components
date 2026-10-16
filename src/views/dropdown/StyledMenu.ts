/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import type { ArrowPosition } from '../../theming/types';
import arrowStyles from '../../theming/utils/arrowStyles';
import { componentStyles } from '../../theming/utils/componentStyles';
import type { IStyledListboxProps } from '../../types/views';
import { StyledFloatingMenu } from './StyledFloatingMenu';
import { StyledListbox } from './StyledListbox';
import { StyledSeparator } from './StyledSeparator';

interface IStyledMenuProps extends IStyledListboxProps {
  $arrowPosition?: ArrowPosition;
}

/*
 * 1. Override arrow parent positioning to ensure arrow is visible beyond block overflow boundaries.
 * 2. The wrapper's `menuStyles` rule (`.wrapper > *`) clears the padding. It has the same
 *    specificity as this rule, so the menu wins only when its view is defined after the
 *    wrapper's. Naming the wrapper makes the import, and so the definition order, explicit.
 *    `:where()` keeps the rule at resting specificity, so `componentStyles` and a consumer's
 *    own rules still apply over it.
 * 3. Separators bring their own margin.
 */
export const StyledMenu = styled(StyledListbox)<IStyledMenuProps>`
  /* stylelint-disable-next-line declaration-no-important */
  position: static !important; /* [1] */

  :where(${StyledFloatingMenu}) > & {
    padding: ${props => props.theme.space.xxs}; /* [2] */
  }

  > li:not(${StyledSeparator}) + li:not(${StyledSeparator}) {
    margin-block-start: ${props => props.theme.space.base / 2}px; /* [3] */
  }

  ${props =>
    props.$arrowPosition &&
    arrowStyles(props.$arrowPosition, {
      size: `${props.theme.space.base * 1.5}px`,
      inset: '1px',
      animationModifier: '[data-garden-animate-arrow="true"]'
    })};

  ${componentStyles};
`;
