/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Item, IItemProps } from './Item';
import { StyledNextItem, StyledItemIcon, StyledNextIcon } from '../../../styled';
import useDropdownContext from '../../../utils/useDropdownContext';
import useMenuContext from '../../../utils/useMenuContext';

const NextItemComponent = React.forwardRef<HTMLLIElement, IItemProps>(
  ({ children, disabled, ...props }, ref) => {
    const { isCompact } = useMenuContext();

    return (
      <StyledNextItem ref={ref} disabled={disabled} {...props}>
        <StyledItemIcon isCompact={isCompact} isDisabled={disabled} isVisible={true}>
          <StyledNextIcon isDisabled={disabled} />
        </StyledItemIcon>
        {children}
      </StyledNextItem>
    );
  }
);

NextItemComponent.displayName = 'NextItemComponent';

/**
 * Accepts all `<li>` props
 */
export const NextItem = React.forwardRef<HTMLLIElement, Omit<IItemProps, 'component'>>(
  ({ value, disabled, ...props }, ref) => {
    const { nextItemsHashRef } = useDropdownContext();
    const { itemIndexRef } = useMenuContext();

    if (!disabled) {
      // Include current index in global Dropdown context
      (nextItemsHashRef.current as any)[value] = itemIndexRef.current;
    }

    return (
      <Item
        component={NextItemComponent}
        aria-expanded={true}
        disabled={disabled}
        value={value}
        ref={ref}
        {...props}
      />
    );
  }
);

NextItem.displayName = 'NextItem';

NextItem.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool
};
