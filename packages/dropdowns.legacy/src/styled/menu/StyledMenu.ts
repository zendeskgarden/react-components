/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles, arrowStyles } from '@zendeskgarden/react-theming';
import { PopperPlacement } from '../../types';
import { getArrowPosition } from '../../utils/garden-placements';

const COMPONENT_ID = 'dropdowns.menu';

interface IStyledMenuProps {
  $isCompact?: boolean;
  $isAnimated?: boolean;
  $hasArrow?: boolean;
  $placement?: PopperPlacement;
  $maxHeight?: string;
}

/**
 * 1. Override arrow parent positioning to ensure arrow is visible beyond block
 *    overflow boundaries.
 */
export const StyledMenu = styled.ul.attrs<IStyledMenuProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props.$isAnimated ? 'is-animated' : undefined
}))<IStyledMenuProps>`
  /* stylelint-disable-next-line declaration-no-important */
  position: static !important; /* [1] */
  max-height: ${props => props.$maxHeight};
  overflow-y: auto;

  ${props =>
    props.$hasArrow &&
    arrowStyles(getArrowPosition(props.$placement), {
      size: `${props.theme.space.base * 1.5}px`,
      inset: '1px',
      animationModifier: props.$isAnimated ? '.is-animated' : undefined
    })};

  ${componentStyles};
`;
