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
import { StyledListbox } from './StyledListbox';

interface IStyledMenuProps extends IStyledListboxProps {
  $arrowPosition?: ArrowPosition;
}

/*
 * 1. Override arrow parent positioning to ensure arrow is visible beyond block overflow boundaries.
 */
export const StyledMenu = styled(StyledListbox)<IStyledMenuProps>`
  /* stylelint-disable-next-line declaration-no-important */
  position: static !important; /* [1] */

  ${props =>
    props.$arrowPosition &&
    arrowStyles(props.$arrowPosition, {
      size: `${props.theme.space.base * 1.5}px`,
      inset: '1px',
      animationModifier: '[data-garden-animate-arrow="true"]'
    })};

  ${componentStyles};
`;
