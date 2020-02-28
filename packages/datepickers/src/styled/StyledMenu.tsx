/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, menuStyles } from '@zendeskgarden/react-theming';
import { POPPER_PLACEMENT, getMenuPosition } from '../elements/Datepicker/utils/garden-placements';

const COMPONENT_ID = 'dropdowns.menu';

interface IStyledMenuViewProps {
  isCompact?: boolean;
  placement?: POPPER_PLACEMENT;
  isAnimated?: boolean;
}

const StyledMenuView = styled.div.attrs<IStyledMenuViewProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props.isAnimated && 'is-animated'
}))<IStyledMenuViewProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMenuView.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledMenuWrapperProps {
  isHidden?: boolean;
  isAnimated?: boolean;
  zIndex?: number;
  placement?: POPPER_PLACEMENT;
}

const StyledMenuWrapper = styled.div.attrs<IStyledMenuWrapperProps>(props => ({
  className: props.isAnimated && 'is-animated'
}))<IStyledMenuWrapperProps>`
  ${props =>
    menuStyles(getMenuPosition(props.placement), {
      hidden: props.isHidden,
      margin: `${props.theme.space.base}px`,
      zIndex: props.zIndex,
      childSelector: `${StyledMenuView}`,
      animationModifier: props.isAnimated ? '.is-animated' : undefined
    })};
`;

StyledMenuWrapper.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledMenuProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements)
   */
  placement?: POPPER_PLACEMENT;
  isAnimated?: boolean;
  isCompact?: boolean;
  isHidden?: boolean;
  zIndex?: number;
}

export const StyledMenu = React.forwardRef<HTMLDivElement, IStyledMenuProps>(
  ({ placement, children, isHidden, isAnimated, zIndex, ...other }, ref) => {
    return (
      <StyledMenuWrapper
        placement={placement}
        isHidden={isHidden}
        isAnimated={isAnimated}
        zIndex={zIndex}
        ref={ref}
        {...other}
      >
        <StyledMenuView placement={placement} isAnimated={isAnimated}>
          {children}
        </StyledMenuView>
      </StyledMenuWrapper>
    );
  }
);

StyledMenu.displayName = 'StyledMenu';
