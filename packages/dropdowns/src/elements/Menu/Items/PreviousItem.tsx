/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Item, IItemProps } from './Item';
import { StyledPreviousItem } from '../../../styled';
import useDropdownContext from '../../../utils/useDropdownContext';
import useMenuContext from '../../../utils/useMenuContext';

/**
 * Accepts all `<li>` props
 */
export const PreviousItem = React.forwardRef<HTMLLIElement, IItemProps>(
  ({ value, disabled, ...props }, ref) => {
    const { previousIndexRef } = useDropdownContext();
    const { itemIndexRef } = useMenuContext();

    if (disabled) {
      return <Item component={StyledPreviousItem} disabled {...props} ref={ref} />;
    }

    previousIndexRef.current = itemIndexRef.current;

    return (
      <Item
        component={StyledPreviousItem}
        aria-expanded={true}
        value={value}
        {...props}
        ref={ref}
      />
    );
  }
);

PreviousItem.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
  isFocused: PropTypes.bool,
  isHovered: PropTypes.bool
};
