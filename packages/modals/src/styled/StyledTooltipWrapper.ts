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

interface IStyledTooltipWrapperProps {
  isAnimated?: boolean;
  zIndex?: number;
  placement?: Placement;
}

export const StyledTooltipWrapper = styled.div.attrs<IStyledTooltipWrapperProps>(props => ({
  className: props.isAnimated && 'is-animated'
}))<IStyledTooltipWrapperProps>`
  ${props =>
    menuStyles(getMenuPosition(props.placement), {
      theme: props.theme,
      hidden: false,
      /**
       * Popper v2 no longer allows margin values to be applied to referenced
       * elements.
       */
      margin: '0',
      zIndex: props.zIndex,
      animationModifier: '.is-animated'
    })};
`;

StyledTooltipWrapper.defaultProps = {
  theme: DEFAULT_THEME
};
