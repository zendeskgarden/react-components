/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import StyledNextItem from '../../styled/items/StyledNextItem';
import useDropdownContext from '../../utils/useDropdownContext';
import useMenuContext from '../../utils/useMenuContext';

const NextItem = ({ value, disabled, ...props }) => {
  const { nextItemsHashRef } = useDropdownContext();
  const { itemIndexRef } = useMenuContext();

  if (disabled) {
    return <Item component={StyledNextItem} disabled {...props} />;
  }

  nextItemsHashRef.current[value] = itemIndexRef.current;

  return <Item component={StyledNextItem} aria-expanded={true} value={value} {...props} />;
};

NextItem.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool
};

export default NextItem;
