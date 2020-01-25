/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Item, IItemProps } from './Item';
import { StyledAddItem } from '../../../styled';

/**
 * Accepts all `<li>` props
 */
export const AddItem = React.forwardRef<HTMLLIElement, IItemProps>((props, ref) => (
  <Item component={StyledAddItem} ref={ref} {...props} />
));

AddItem.propTypes = {
  value: PropTypes.any,
  isActive: PropTypes.bool,
  isFocused: PropTypes.bool,
  isHovered: PropTypes.bool,
  disabled: PropTypes.bool
};
