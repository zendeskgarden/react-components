/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME, menuStyles, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { getMenuPosition } from '../elements/Datepicker/utils/garden-placements';
import { PopperPlacement } from '../types';

const COMPONENT_ID = 'datepickers.menu_wrapper';

interface IStyledMenuWrapperProps {
  isHidden?: boolean;
  isAnimated?: boolean;
  zIndex?: number;
  placement?: PopperPlacement;
}

export const StyledMenuWrapper = styled.div.attrs<IStyledMenuWrapperProps>(props => ({
  className: props.isAnimated && 'is-animated'
}))<IStyledMenuWrapperProps>`
  ${props =>
    menuStyles(getMenuPosition(props.placement), {
      theme: props.theme,
      hidden: props.isHidden,
      margin: `${props.theme.space.base}px`,
      zIndex: props.zIndex,
      animationModifier: props.isAnimated ? '.is-animated' : undefined
    })};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMenuWrapper.defaultProps = {
  theme: DEFAULT_THEME
};
