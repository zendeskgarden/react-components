/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import {
  getMenuPosition,
  menuStyles,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';
import { Placement } from '@floating-ui/react-dom';

const COMPONENT_ID = 'datepickers.menu_wrapper';

interface IStyledMenuWrapperProps {
  $isAnimated?: boolean;
  $zIndex?: number;
  'aria-hidden'?: boolean;
  $placement: Placement;
}

/*
 * 1. Expected to use https://floating-ui.com/docs/misc#subpixel-and-accelerated-positioning
 */
export const StyledMenuWrapper = styled.div.attrs<IStyledMenuWrapperProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props.$isAnimated && 'is-animated'
}))<IStyledMenuWrapperProps>`
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

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
