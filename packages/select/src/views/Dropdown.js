/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import { MenuView } from '@zendeskgarden/react-menus';

const COMPONENT_ID = 'select.dropdown';

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

const StyledMenuView = styled(MenuView).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

const Dropdown = React.forwardRef((props, ref) => {
  return <StyledMenuView ref={ref} {...props} />;
});

Dropdown.propTypes = {
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
  arrow: PropTypes.bool
};

/** @component */
export default Dropdown;
