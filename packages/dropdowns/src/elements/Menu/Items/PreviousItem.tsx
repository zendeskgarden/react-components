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
import { StyledPreviousItem, StyledItemIcon, StyledPreviousIcon } from '../../../styled';
import useDropdownContext from '../../../utils/useDropdownContext';
import useMenuContext from '../../../utils/useMenuContext';

// eslint-disable-next-line react/display-name
const PreviousItemComponent = React.forwardRef<HTMLLIElement, IItemProps>(
  ({ children, disabled, ...props }, ref) => {
    const { isCompact } = useMenuContext();

    return (
      <StyledPreviousItem ref={ref} disabled={disabled} {...props}>
        <StyledItemIcon isCompact={isCompact} isDisabled={disabled} isVisible>
          <StyledPreviousIcon isDisabled={disabled} />
        </StyledItemIcon>
        {children}
      </StyledPreviousItem>
    );
  }
);

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const PreviousItem = React.forwardRef<
  HTMLLIElement,
  Omit<IItemProps, 'component' | 'hasIcon'>
>(({ value, disabled, ...props }, ref) => {
  const { previousIndexRef } = useDropdownContext();
  const { itemIndexRef } = useMenuContext();

  if (!disabled) {
    previousIndexRef.current = itemIndexRef.current;
  }

  return (
    <Item
      component={PreviousItemComponent}
      aria-expanded
      value={value}
      disabled={disabled}
      {...props}
      ref={ref}
      hasIcon
    />
  );
});

PreviousItem.displayName = 'PreviousItem';

PreviousItem.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool
};
