/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import StyledPreviousItem from '../../styled/items/StyledPreviousItem';
import useDropdownContext from '../../utils/useDropdownContext';
import useMenuContext from '../../utils/useMenuContext';

const PreviousItem = ({ value, disabled, ...props }) => {
  const { previousItemRef, previousIndexRef } = useDropdownContext();
  const { itemIndexRef } = useMenuContext();

  if (disabled) {
    return <Item component={StyledPreviousItem} disabled {...props} />;
  }

  previousItemRef.current = value;
  previousIndexRef.current = itemIndexRef.current;

  return <Item component={StyledPreviousItem} aria-expanded={true} value={value} {...props} />;
};

PreviousItem.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool
};

export default PreviousItem;
