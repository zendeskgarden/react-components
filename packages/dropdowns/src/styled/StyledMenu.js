/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';
import MenuStyles from '@zendeskgarden/css-menus';
import ArrowStyles from '@zendeskgarden/css-arrows';

const COMPONENT_ID = 'dropdowns.menu_view';

const PLACEMENT = {
  AUTO: 'auto',
  TOP: 'top',
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  RIGHT: 'right',
  RIGHT_START: 'right-start',
  RIGHT_END: 'right-end',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottom-start',
  BOTTOM_END: 'bottom-end',
  LEFT: 'left',
  LEFT_START: 'left-start',
  LEFT_END: 'left-end'
};

const shouldShowArrow = ({ arrow, placement }) => {
  return arrow && placement;
};

const retrieveMenuMargin = ({ arrow, placement }) => {
  const marginAmount = shouldShowArrow({ arrow, placement }) ? '8px' : '4px';

  if (
    placement === PLACEMENT.BOTTOM ||
    placement === PLACEMENT.BOTTOM_START ||
    placement === PLACEMENT.BOTTOM_END
  ) {
    return `margin-top: ${marginAmount};`;
  }

  if (
    placement === PLACEMENT.TOP ||
    placement === PLACEMENT.TOP_START ||
    placement === PLACEMENT.TOP_END
  ) {
    return `margin-bottom: ${marginAmount};`;
  }

  if (
    placement === PLACEMENT.LEFT ||
    placement === PLACEMENT.LEFT_START ||
    placement === PLACEMENT.LEFT_END
  ) {
    return `margin-right: ${marginAmount};`;
  }

  if (
    placement === PLACEMENT.RIGHT ||
    placement === PLACEMENT.RIGHT_START ||
    placement === PLACEMENT.RIGHT_END
  ) {
    return `margin-left: ${marginAmount};`;
  }

  return '';
};

/**
 * Accepts all `<ul>` props
 */
const StyledInternalMenu = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props =>
    classNames(MenuStyles['c-menu'], {
      // Size
      [MenuStyles['c-menu--sm']]: props.small,

      // Placement
      [MenuStyles['c-menu--up']]:
        props.placement === PLACEMENT.TOP ||
        props.placement === PLACEMENT.TOP_START ||
        props.placement === PLACEMENT.TOP_END,
      [MenuStyles['c-menu--right']]:
        props.placement === PLACEMENT.RIGHT ||
        props.placement === PLACEMENT.RIGHT_START ||
        props.placement === PLACEMENT.RIGHT_END,
      [MenuStyles['c-menu--left']]:
        props.placement === PLACEMENT.LEFT ||
        props.placement === PLACEMENT.LEFT_START ||
        props.placement === PLACEMENT.LEFT_END,
      [MenuStyles['c-menu--down']]:
        props.placement === PLACEMENT.BOTTOM ||
        props.placement === PLACEMENT.BOTTOM_START ||
        props.placement === PLACEMENT.BOTTOM_END,

      // State
      [MenuStyles['is-open']]: props.animate,
      [MenuStyles['is-hidden']]: props.hidden,

      // Arrows
      [ArrowStyles['c-arrow']]: shouldShowArrow(props),
      [ArrowStyles['c-arrow--r']]: props.placement === PLACEMENT.LEFT,
      [ArrowStyles['c-arrow--rt']]: props.placement === PLACEMENT.LEFT_START,
      [ArrowStyles['c-arrow--rb']]: props.placement === PLACEMENT.LEFT_END,
      [ArrowStyles['c-arrow--b']]: props.placement === PLACEMENT.TOP,
      [ArrowStyles['c-arrow--bl']]: props.placement === PLACEMENT.TOP_START,
      [ArrowStyles['c-arrow--br']]: props.placement === PLACEMENT.TOP_END,
      [ArrowStyles['c-arrow--l']]: props.placement === PLACEMENT.RIGHT,
      [ArrowStyles['c-arrow--lt']]: props.placement === PLACEMENT.RIGHT_START,
      [ArrowStyles['c-arrow--lb']]: props.placement === PLACEMENT.RIGHT_END,
      [ArrowStyles['c-arrow--t']]: props.placement === PLACEMENT.BOTTOM,
      [ArrowStyles['c-arrow--tl']]: props.placement === PLACEMENT.BOTTOM_START,
      [ArrowStyles['c-arrow--tr']]: props.placement === PLACEMENT.BOTTOM_END,

      // RTL
      [MenuStyles['is-rtl']]: isRtl(props)
    })
})`
  && {
    position: relative;
  }

  :focus {
    outline: none;
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

const MenuWrapper = styled.div`
  ${retrieveMenuMargin};
`;

const StyledMenu = props => {
  const { arrow, placement } = props;
  const { menuRef, ...otherRefs } = props;

  return (
    <MenuWrapper arrow={arrow} placement={placement}>
      <StyledInternalMenu innerRef={menuRef} {...otherRefs} />
    </MenuWrapper>
  );
};

StyledMenu.propTypes = {
  /**
   * All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements)
   */
  placement: PropTypes.oneOf([
    PLACEMENT.AUTO,
    PLACEMENT.TOP,
    PLACEMENT.TOP_START,
    PLACEMENT.TOP_END,
    PLACEMENT.RIGHT,
    PLACEMENT.RIGHT_START,
    PLACEMENT.RIGHT_END,
    PLACEMENT.BOTTOM,
    PLACEMENT.BOTTOM_START,
    PLACEMENT.BOTTOM_END,
    PLACEMENT.LEFT,
    PLACEMENT.LEFT_START,
    PLACEMENT.LEFT_END
  ]),
  animate: PropTypes.bool,
  small: PropTypes.bool,
  hidden: PropTypes.bool,
  arrow: PropTypes.bool,
  /**
   * Ref of internal Menu container
   */
  menuRef: PropTypes.func
};

/** @component */
export default StyledMenu;
