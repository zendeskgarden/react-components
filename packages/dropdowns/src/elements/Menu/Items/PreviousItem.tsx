/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Item, IItemProps } from './Item';
import { StyledPreviousItem, StyledItemIcon, StyledPreviousIcon } from '../../../styled';
import useDropdownContext from '../../../utils/useDropdownContext';
import useMenuContext from '../../../utils/useMenuContext';

const PreviousItemComponent = React.forwardRef<HTMLDivElement, IItemProps>(
  ({ children, disabled, ...props }, ref) => {
    const { isCompact } = useMenuContext();

    return (
      <StyledPreviousItem ref={ref} disabled={disabled} {...props}>
        <StyledItemIcon isCompact={isCompact} isDisabled={disabled} isVisible={true}>
          <StyledPreviousIcon isDisabled={disabled} />
        </StyledItemIcon>
        {children}
      </StyledPreviousItem>
    );
  }
);

/**
 * Accepts all `<div>` props
 */
export const PreviousItem = React.forwardRef<HTMLDivElement, Omit<IItemProps, 'component'>>(
  ({ value, disabled, ...props }, ref) => {
    const { previousIndexRef } = useDropdownContext();
    const { itemIndexRef } = useMenuContext();

    if (!disabled) {
      previousIndexRef.current = itemIndexRef.current;
    }

    return (
      <Item
        component={PreviousItemComponent}
        aria-expanded={true}
        value={value}
        disabled={disabled}
        {...props}
        ref={ref}
      />
    );
  }
);

PreviousItem.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool
};
