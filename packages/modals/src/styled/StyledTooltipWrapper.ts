/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { Placement } from '@floating-ui/react-dom';
import { getMenuPosition, menuStyles } from '@zendeskgarden/react-theming';

interface IStyledTooltipWrapperProps {
  $placement: Placement;
  $isAnimated?: boolean;
  $zIndex?: number;
}

/*
 * 1. Expected to use https://floating-ui.com/docs/misc#subpixel-and-accelerated-positioning
 */
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
