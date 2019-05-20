/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import { StyledNextItem } from '../../styled';
import useDropdownContext from '../../utils/useDropdownContext';
import useMenuContext from '../../utils/useMenuContext';

/**
 * Accepts all `<li>` props
 */
const NextItem = React.forwardRef(({ value, disabled, ...props }, ref) => {
  const { nextItemsHashRef } = useDropdownContext();
  const { itemIndexRef } = useMenuContext();

  if (disabled) {
    return <Item component={StyledNextItem} disabled {...props} />;
  }

  // Include current index in global Dropdown context
  nextItemsHashRef.current[value] = itemIndexRef.current;

  return (
    <Item component={StyledNextItem} aria-expanded={true} value={value} ref={ref} {...props} />
  );
});

NextItem.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool
};

export default NextItem;
