/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';
import MenuStyles from '@zendeskgarden/css-menus';
import ArrowStyles from '@zendeskgarden/css-arrows';
import { POPPER_PLACEMENT } from '../../utils/garden-placements';

const COMPONENT_ID = 'dropdowns.menu';

const shouldShowArrow = ({
  arrow,
  placement
}: {
  arrow?: boolean;
  placement?: POPPER_PLACEMENT;
}) => {
  return arrow && placement;
};

const retrieveMenuMargin = ({
  arrow,
  placement
}: {
  arrow?: boolean;
  placement?: POPPER_PLACEMENT;
}) => {
  const marginAmount = shouldShowArrow({ arrow, placement }) ? '8px' : '4px';

  if (
    placement === POPPER_PLACEMENT.BOTTOM ||
    placement === POPPER_PLACEMENT.BOTTOM_START ||
    placement === POPPER_PLACEMENT.BOTTOM_END
  ) {
    return `margin-top: ${marginAmount};`;
  }

  if (
    placement === POPPER_PLACEMENT.TOP ||
    placement === POPPER_PLACEMENT.TOP_START ||
    placement === POPPER_PLACEMENT.TOP_END
  ) {
    return `margin-bottom: ${marginAmount};`;
  }

  if (
    placement === POPPER_PLACEMENT.LEFT ||
    placement === POPPER_PLACEMENT.LEFT_START ||
    placement === POPPER_PLACEMENT.LEFT_END
  ) {
    return `margin-right: ${marginAmount};`;
  }

  if (
    placement === POPPER_PLACEMENT.RIGHT ||
    placement === POPPER_PLACEMENT.RIGHT_START ||
    placement === POPPER_PLACEMENT.RIGHT_END
  ) {
    return `margin-left: ${marginAmount};`;
  }

  return '';
};

interface IStyledMenuViewProps extends HTMLProps<HTMLUListElement> {
  small?: boolean;
  placement?: POPPER_PLACEMENT;
  animate?: boolean;
  arrow?: boolean;
}

/**
 * Accepts all `<ul>` props
 */
const StyledMenuView = styled.ul.attrs<IStyledMenuViewProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(MenuStyles['c-menu'], {
    // Size
    [MenuStyles['c-menu--sm']]: props.small,

    // Placement
    [MenuStyles['c-menu--up']]:
      props.placement === POPPER_PLACEMENT.TOP ||
      props.placement === POPPER_PLACEMENT.TOP_START ||
      props.placement === POPPER_PLACEMENT.TOP_END,
    [MenuStyles['c-menu--right']]:
      props.placement === POPPER_PLACEMENT.RIGHT ||
      props.placement === POPPER_PLACEMENT.RIGHT_START ||
      props.placement === POPPER_PLACEMENT.RIGHT_END,
    [MenuStyles['c-menu--left']]:
      props.placement === POPPER_PLACEMENT.LEFT ||
      props.placement === POPPER_PLACEMENT.LEFT_START ||
      props.placement === POPPER_PLACEMENT.LEFT_END,
    [MenuStyles['c-menu--down']]:
      props.placement === POPPER_PLACEMENT.BOTTOM ||
      props.placement === POPPER_PLACEMENT.BOTTOM_START ||
      props.placement === POPPER_PLACEMENT.BOTTOM_END,

    // State
    [MenuStyles['is-open']]: props.animate,
    [MenuStyles['is-hidden']]: props.hidden,

    // Arrows
    [ArrowStyles['c-arrow']]: shouldShowArrow({ arrow: props.arrow, placement: props.placement }),
    [ArrowStyles['c-arrow--r']]: props.placement === POPPER_PLACEMENT.LEFT,
    [ArrowStyles['c-arrow--rt']]: props.placement === POPPER_PLACEMENT.LEFT_START,
    [ArrowStyles['c-arrow--rb']]: props.placement === POPPER_PLACEMENT.LEFT_END,
    [ArrowStyles['c-arrow--b']]: props.placement === POPPER_PLACEMENT.TOP,
    [ArrowStyles['c-arrow--bl']]: props.placement === POPPER_PLACEMENT.TOP_START,
    [ArrowStyles['c-arrow--br']]: props.placement === POPPER_PLACEMENT.TOP_END,
    [ArrowStyles['c-arrow--l']]: props.placement === POPPER_PLACEMENT.RIGHT,
    [ArrowStyles['c-arrow--lt']]: props.placement === POPPER_PLACEMENT.RIGHT_START,
    [ArrowStyles['c-arrow--lb']]: props.placement === POPPER_PLACEMENT.RIGHT_END,
    [ArrowStyles['c-arrow--t']]: props.placement === POPPER_PLACEMENT.BOTTOM,
    [ArrowStyles['c-arrow--tl']]: props.placement === POPPER_PLACEMENT.BOTTOM_START,
    [ArrowStyles['c-arrow--tr']]: props.placement === POPPER_PLACEMENT.BOTTOM_END,

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

  ${props => retrieveTheme(COMPONENT_ID, props)};
` as React.FunctionComponent<IStyledMenuViewProps>;

interface IStyledMenuWrapperProps {
  arrow?: boolean;
  placement?: POPPER_PLACEMENT;
}

const StyledMenuWrapper = styled.div<IStyledMenuWrapperProps>`
  ${retrieveMenuMargin};
`;

interface IStyledMaxHeightWrapper extends HTMLProps<HTMLDivElement> {
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

export interface IStyledMenuProps extends HTMLProps<HTMLUListElement> {
  /**
   * All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements)
   */
  placement?: POPPER_PLACEMENT;
  animate?: boolean;
  small?: boolean;
  hidden?: boolean;
  arrow?: boolean;
  maxHeight?: string;
}

export const StyledMenu = React.forwardRef<any, IStyledMenuProps>(
  ({ arrow, placement, maxHeight, children, ...other }, ref) => {
    return (
      <StyledMenuWrapper arrow={arrow} placement={placement}>
        <StyledMenuView ref={ref} arrow={arrow} placement={placement} {...other}>
          <StyledMaxHeightWrapper maxHeight={maxHeight}>{children}</StyledMaxHeightWrapper>
        </StyledMenuView>
      </StyledMenuWrapper>
    );
  }
);
