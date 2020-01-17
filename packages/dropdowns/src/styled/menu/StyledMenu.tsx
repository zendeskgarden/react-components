/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles, isRtl, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import MenuStyles from '@zendeskgarden/css-menus';
import ArrowStyles from '@zendeskgarden/css-arrows';
import { POPPER_PLACEMENT } from '../../utils/garden-placements';

const COMPONENT_ID = 'dropdowns.menu';

const shouldShowArrow = ({
  hasArrow,
  placement
}: {
  hasArrow?: boolean;
  placement?: POPPER_PLACEMENT;
}) => {
  return hasArrow && placement;
};

const retrieveMenuMargin = ({
  hasArrow,
  placement
}: {
  hasArrow?: boolean;
  placement?: POPPER_PLACEMENT;
}) => {
  const marginAmount = shouldShowArrow({ hasArrow, placement }) ? '8px' : '4px';

  if (placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end') {
    return `margin-top: ${marginAmount};`;
  }

  if (placement === 'top' || placement === 'top-start' || placement === 'top-end') {
    return `margin-bottom: ${marginAmount};`;
  }

  if (placement === 'left' || placement === 'left-start' || placement === 'left-end') {
    return `margin-right: ${marginAmount};`;
  }

  if (placement === 'right' || placement === 'right-start' || placement === 'right-end') {
    return `margin-left: ${marginAmount};`;
  }

  return '';
};

interface IStyledMenuViewProps extends HTMLAttributes<HTMLUListElement> {
  isSmall?: boolean;
  placement?: POPPER_PLACEMENT;
  isAnimated?: boolean;
  hasArrow?: boolean;
  isHidden?: boolean;
}

/**
 * Accepts all `<ul>` props
 */
const StyledMenuView = styled.ul.attrs<IStyledMenuViewProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(MenuStyles['c-menu'], {
    // Size
    [MenuStyles['c-menu--sm']]: props.isSmall,

    // Placement
    [MenuStyles['c-menu--up']]:
      props.placement === 'top' || props.placement === 'top-start' || props.placement === 'top-end',
    [MenuStyles['c-menu--right']]:
      props.placement === 'right' ||
      props.placement === 'right-start' ||
      props.placement === 'right-end',
    [MenuStyles['c-menu--left']]:
      props.placement === 'left' ||
      props.placement === 'left-start' ||
      props.placement === 'left-end',
    [MenuStyles['c-menu--down']]:
      props.placement === 'bottom' ||
      props.placement === 'bottom-start' ||
      props.placement === 'bottom-end',

    // State
    [MenuStyles['is-open']]: props.isAnimated,
    [MenuStyles['is-hidden']]: props.isHidden,

    // Arrows
    [ArrowStyles['c-arrow']]: shouldShowArrow({
      hasArrow: props.hasArrow,
      placement: props.placement
    }),
    [ArrowStyles['c-arrow--r']]: props.placement === 'left',
    [ArrowStyles['c-arrow--rt']]: props.placement === 'left-start',
    [ArrowStyles['c-arrow--rb']]: props.placement === 'left-end',
    [ArrowStyles['c-arrow--b']]: props.placement === 'top',
    [ArrowStyles['c-arrow--bl']]: props.placement === 'top-start',
    [ArrowStyles['c-arrow--br']]: props.placement === 'top-end',
    [ArrowStyles['c-arrow--l']]: props.placement === 'right',
    [ArrowStyles['c-arrow--lt']]: props.placement === 'right-start',
    [ArrowStyles['c-arrow--lb']]: props.placement === 'right-end',
    [ArrowStyles['c-arrow--t']]: props.placement === 'bottom',
    [ArrowStyles['c-arrow--tl']]: props.placement === 'bottom-start',
    [ArrowStyles['c-arrow--tr']]: props.placement === 'bottom-end',

    // RTL
    [MenuStyles['is-rtl']]: isRtl(props)
  })
}))<IStyledMenuViewProps>`
  && {
    position: relative;
  }

  :focus {
    outline: none;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMenuView.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledMenuWrapperProps {
  hasArrow?: boolean;
  placement?: POPPER_PLACEMENT;
}

const StyledMenuWrapper = styled.div<IStyledMenuWrapperProps>`
  ${retrieveMenuMargin};
`;

StyledMenuWrapper.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledMaxHeightWrapper extends HTMLAttributes<HTMLDivElement> {
  maxHeight?: string;
  height?: string;
}

const StyledMaxHeightWrapper = styled.div<IStyledMaxHeightWrapper>`
  ${props =>
    props.maxHeight &&
    !props.height &&
    `
  overflow-y: auto;
  max-height: ${props.maxHeight};
`}
`;

StyledMaxHeightWrapper.defaultProps = {
  theme: DEFAULT_THEME
};

export interface IStyledMenuProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements)
   */
  placement?: POPPER_PLACEMENT;
  isAnimated?: boolean;
  isSmall?: boolean;
  isHidden?: boolean;
  hasArrow?: boolean;
  maxHeight?: string;
}

export const StyledMenu = React.forwardRef<HTMLUListElement, IStyledMenuProps>(
  ({ hasArrow, placement, maxHeight, children, ...other }, ref) => {
    return (
      <StyledMenuWrapper hasArrow={hasArrow} placement={placement}>
        <StyledMenuView ref={ref} hasArrow={hasArrow} placement={placement} {...other}>
          <StyledMaxHeightWrapper maxHeight={maxHeight}>{children}</StyledMaxHeightWrapper>
        </StyledMenuView>
      </StyledMenuWrapper>
    );
  }
);
