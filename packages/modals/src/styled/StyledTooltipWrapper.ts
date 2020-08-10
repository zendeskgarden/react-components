/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME, menuStyles } from '@zendeskgarden/react-theming';
import { getMenuPosition } from '../utils/gardenPlacements';
import { Placement } from '@popperjs/core';

/**
 * 1. Popper v2 no longer allows margin values to be applied to referenced
 *    elements.
 */
export const StyledTooltipWrapper = styled.div.attrs({
  className: 'is-animated'
})<{
  zIndex?: number;
  placement?: Placement;
}>`
  ${props =>
    menuStyles(getMenuPosition(props.placement), {
      theme: props.theme,
      hidden: false,
      margin: `${props.theme.space.base}px`,
      zIndex: props.zIndex,
      animationModifier: '.is-animated'
    })};

  margin: 0; /* [1] */
`;

StyledTooltipWrapper.defaultProps = {
  theme: DEFAULT_THEME
};
