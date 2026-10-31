/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Placement } from '@floating-ui/react-dom';
import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getMenuPosition } from '../../theming/utils/getMenuPosition';
import menuStyles from '../../theming/utils/menuStyles';
import type { WithTheme } from '../../types/views';

interface IStyledMenuWrapperProps {
  $isAnimated?: boolean;
  $zIndex?: number;
  'aria-hidden'?: boolean;
  $placement: Placement;
}

/*
 * 1. Expected to use https://floating-ui.com/docs/misc#subpixel-and-accelerated-positioning
 */
export const StyledMenuWrapper = styled.div<WithTheme<IStyledMenuWrapperProps>>`
  top: 0; /* [1] */
  left: 0; /* [1] */

  ${props =>
    menuStyles(getMenuPosition(props.$placement), {
      theme: props.theme,
      hidden: props['aria-hidden'],
      margin: `${props.theme.space.base}px`,
      zIndex: props.$zIndex,
      animationModifier: props.$isAnimated ? '.is-animated' : undefined
    })};

  ${componentStyles};
`;
