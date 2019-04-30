/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { StyledHeaderItem } from '../../styled';

/**
 * Accepts all `<li>` props
 */
const HeaderItem = StyledHeaderItem;

HeaderItem.displayName = 'HeaderItem';

HeaderItem.propTypes = {
  active: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  /** Applies icon styling */
  containsIcon: PropTypes.bool
};

/** @component */
export default HeaderItem;
