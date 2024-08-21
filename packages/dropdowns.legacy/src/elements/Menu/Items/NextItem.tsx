/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Item } from './Item';
import { IItemProps } from '../../../types';
import { StyledNextItem, StyledItemIcon, StyledNextIcon } from '../../../styled';
import useDropdownContext from '../../../utils/useDropdownContext';
import useMenuContext from '../../../utils/useMenuContext';

// eslint-disable-next-line react/display-name
const NextItemComponent = React.forwardRef<HTMLLIElement, IItemProps>(
  ({ children, disabled, ...props }, ref) => {
    const { isCompact } = useMenuContext();

    return (
      <StyledNextItem ref={ref} disabled={disabled} {...props}>
        <StyledItemIcon isCompact={isCompact} isDisabled={disabled} isVisible>
          <StyledNextIcon isDisabled={disabled} />
        </StyledItemIcon>
        {children}
      </StyledNextItem>
    );
  }
);

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const NextItem = React.forwardRef<HTMLLIElement, Omit<IItemProps, 'component' | 'hasIcon'>>(
  ({ value, disabled, ...props }, ref) => {
    const {
      nextItemsHashRef,
      downshift: { itemToString }
    } = useDropdownContext();
    const { itemIndexRef } = useMenuContext();

    if (!disabled) {
      // Include current index in global Dropdown context
      (nextItemsHashRef.current as any)[itemToString(value)] = itemIndexRef.current;
    }

    return (
      <Item
        component={NextItemComponent}
        aria-expanded
        disabled={disabled}
        value={value}
        ref={ref}
        {...props}
        hasIcon
      />
    );
  }
);

NextItem.displayName = 'NextItem';

NextItem.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool
};
