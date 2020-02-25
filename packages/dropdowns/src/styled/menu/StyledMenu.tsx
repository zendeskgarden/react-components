/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import styled, { CSSProperties } from 'styled-components';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  arrowStyles,
  menuStyles,
  menuPopperStyles
} from '@zendeskgarden/react-theming';
import { POPPER_PLACEMENT, getArrowPosition, getMenuPosition } from '../../utils/garden-placements';

const COMPONENT_ID = 'dropdowns.menu';

interface IStyledMenuViewProps {
  isCompact?: boolean;
  isAnimated?: boolean;
  isHidden?: boolean;
  hasArrow?: boolean;
  placement?: POPPER_PLACEMENT;
  maxHeight?: string;
}

/**
 * 1. Override arrow parent positioning to ensure arrow is visible beyond block
 *    overflow boundaries.
 */
const StyledMenuView = styled.div.attrs<IStyledMenuViewProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props.isAnimated && 'is-animated'
}))<IStyledMenuViewProps>`
  ${props =>
    menuStyles(getMenuPosition(props.placement), {
      theme: props.theme,
      animationModifier: props.isAnimated ? '.is-animated' : undefined
    })};

  /* stylelint-disable-next-line declaration-no-important */
  position: static !important; /* [1] */
  min-width: 180px;
  max-height: ${props => props.maxHeight};
  overflow-y: auto;

  ${props =>
    props.hasArrow &&
    arrowStyles(getArrowPosition(props.placement), {
      size: `${props.theme.space.base * 2}px`,
      inset: '2px',
      animationModifier: props.isAnimated ? '.is-animated' : undefined
    })};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMenuView.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledMenuWrapperProps {
  hasArrow?: boolean;
  placement?: POPPER_PLACEMENT;
  isHidden?: boolean;
  zIndex?: number;
  isAnimated?: boolean;
}

const StyledMenuWrapper = styled.div.attrs<IStyledMenuWrapperProps>(props => ({
  className: props.isAnimated && 'is-animated'
}))<IStyledMenuWrapperProps>`
  ${props =>
    menuPopperStyles(getMenuPosition(props.placement), {
      hidden: props.isHidden,
      margin: `${props.theme.space.base * (props.hasArrow ? 2 : 1)}px`,
      zIndex: props.zIndex,
      animationModifier: props.isAnimated ? '.is-animated' : undefined
    })};
`;

StyledMenuWrapper.defaultProps = {
  theme: DEFAULT_THEME
};

export interface IStyledMenuProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements)
   */
  placement?: POPPER_PLACEMENT;
  isAnimated?: boolean;
  isCompact?: boolean;
  isHidden?: boolean;
  hasArrow?: boolean;
  maxHeight?: string;
  zIndex?: number;
  wrapperStyle?: CSSProperties;
}

export const StyledMenu = React.forwardRef<HTMLDivElement, IStyledMenuProps>(
  (
    {
      hasArrow,
      placement,
      maxHeight,
      children,
      wrapperStyle,
      isHidden,
      zIndex,
      isAnimated,
      ...other
    },
    ref
  ) => {
    return (
      <StyledMenuWrapper
        ref={ref}
        hasArrow={hasArrow}
        placement={placement}
        style={wrapperStyle}
        isHidden={isHidden}
        isAnimated={isAnimated}
        zIndex={zIndex}
      >
        <StyledMenuView
          hasArrow={hasArrow}
          placement={placement}
          isAnimated={isAnimated}
          maxHeight={maxHeight}
          {...other}
        >
          {children}
        </StyledMenuView>
      </StyledMenuWrapper>
    );
  }
);

StyledMenu.displayName = 'StyledMenu';
