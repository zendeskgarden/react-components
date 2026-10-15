/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ModalPlacement } from '@floating-ui/react-dom';
import styled from 'styled-components';

import { getMenuPosition } from '../../theming/utils/getMenuPosition';
import menuStyles from '../../theming/utils/menuStyles';

interface IStyledTooltipWrapperProps {
  $placement: ModalPlacement;
  $isAnimated?: boolean;
  $zIndex?: number;
}

/*
 * 1. Expected to use https://floating-ui.com/docs/misc#subpixel-and-accelerated-positioning
 */
// MIGRATE(component-ids): .attrs with non-data props — move them to the element JSX, after the last spread
export const StyledTooltipWrapper = styled.div.attrs<IStyledTooltipWrapperProps>(props => ({
  className: props.$isAnimated ? 'is-animated' : undefined
}))<IStyledTooltipWrapperProps>`
  top: 0; /* [1] */
  left: 0; /* [1] */

  ${props =>
    menuStyles(getMenuPosition(props.$placement), {
      theme: props.theme,
      hidden: false,
      zIndex: props.$zIndex,
      animationModifier: '.is-animated'
    })};
`;
