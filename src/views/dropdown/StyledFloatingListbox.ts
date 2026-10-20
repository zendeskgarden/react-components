/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import menuStyles from '../../theming/utils/menuStyles';
import type { IStyledFloatingListboxProps } from '../../types/views';

/*
 * 1. Expected to use https://floating-ui.com/docs/misc#subpixel-and-accelerated-positioning
 */
export const StyledFloatingListbox = styled.div<IStyledFloatingListboxProps>`
  top: 0; /* [1] */
  left: 0; /* [1] */

  ${props =>
    menuStyles(props.$position, {
      theme: props.theme,
      hidden: props.$isHidden,
      animationModifier: '[data-garden-animate="true"]',
      zIndex: props.$zIndex
    })};

  ${componentStyles};
`;
