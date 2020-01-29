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

const NextItemComponent = React.forwardRef<HTMLDivElement, IItemProps>(
  ({ children, ...props }, ref) => {
    const { isCompact } = useMenuContext();

    return (
      <StyledNextItem ref={ref} {...props}>
        <StyledItemIcon isCompact={isCompact} isVisible={true}>
          <StyledNextIcon />
        </StyledItemIcon>
        {children}
      </StyledNextItem>
    );
  }
);

/**
 * Accepts all `<div>` props
 */
export const NextItem = React.forwardRef<HTMLDivElement, Omit<IItemProps, 'component'>>(
  ({ value, disabled, ...props }, ref) => {
    const { nextItemsHashRef } = useDropdownContext();
    const { itemIndexRef } = useMenuContext();

    if (disabled) {
      return <Item component={NextItemComponent} disabled {...props} />;
    }

    // Include current index in global Dropdown context
    (nextItemsHashRef.current as any)[value] = itemIndexRef.current;

    return (
      <Item component={NextItemComponent} aria-expanded={true} value={value} ref={ref} {...props} />
    );
  }
);

NextItem.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool
};
