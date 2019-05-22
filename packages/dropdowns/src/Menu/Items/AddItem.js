/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import { StyledAddItem } from '../../styled';

/**
 * Accepts all `<li>` props
 */
const AddItem = props => <Item component={StyledAddItem} {...props} />;

AddItem.propTypes = {
  value: PropTypes.any,
  active: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  disabled: PropTypes.bool
};

export default AddItem;
