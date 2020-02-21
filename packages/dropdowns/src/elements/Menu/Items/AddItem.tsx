/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import AddSvg from '@zendeskgarden/svg-icons/src/16/plus-stroke.svg';
import { Item, IItemProps } from './Item';
import { StyledAddItem, StyledItemIcon } from '../../../styled';
import useMenuContext from '../../../utils/useMenuContext';

const AddItemComponent = React.forwardRef<HTMLDivElement, IItemProps>(
  ({ children, disabled, ...props }, ref) => {
    const { isCompact } = useMenuContext();

    return (
      <StyledAddItem ref={ref} disabled={disabled} {...props}>
        <StyledItemIcon isCompact={isCompact} isVisible={true} isDisabled={disabled}>
          <AddSvg />
        </StyledItemIcon>
        {children}
      </StyledAddItem>
    );
  }
);

AddItemComponent.displayName = 'AddItemComponent';

/**
 * Accepts all `<div>` props
 */
export const AddItem = React.forwardRef<HTMLDivElement, Omit<IItemProps, 'component'>>(
  (props, ref) => <Item component={AddItemComponent} ref={ref} {...props} />
);

AddItem.displayName = 'AddItem';

AddItem.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool
};
