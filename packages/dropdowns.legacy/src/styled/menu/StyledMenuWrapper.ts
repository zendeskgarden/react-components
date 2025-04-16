/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { menuStyles, componentStyles } from '@zendeskgarden/react-theming';
import { PopperPlacement } from '../../types';
import { getMenuPosition } from '../../utils/garden-placements';

const COMPONENT_ID = 'dropdowns.menu_wrapper';

interface IStyledMenuWrapperProps {
  $hasArrow?: boolean;
  $placement?: PopperPlacement;
  $isHidden?: boolean;
  $zIndex?: number;
  $isAnimated?: boolean;
}

export const StyledMenuWrapper = styled.div.attrs<IStyledMenuWrapperProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props.$isAnimated ? 'is-animated' : undefined
}))<IStyledMenuWrapperProps>`
  ${props =>
    menuStyles(getMenuPosition(props.$placement), {
      theme: props.theme,
      hidden: props.$isHidden,
      margin: `${props.theme.space.base * (props.$hasArrow ? 2 : 1)}px`,
      zIndex: props.$zIndex,
      animationModifier: props.$isAnimated ? '.is-animated' : undefined
    })};

  ${componentStyles};
`;
