/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';

import type { MenuPosition } from '../../theming/types';
import { componentStyles } from '../../theming/utils/componentStyles';
import menuStyles from '../../theming/utils/menuStyles';
import { IListboxProps } from '../../types/elements';

export interface IStyledFloatingListboxProps extends ThemeProps<DefaultTheme> {
  $isHidden?: boolean;
  $position: MenuPosition;
  $zIndex?: IListboxProps['zIndex'];
}

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
