/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import AddSvg from '@zendeskgarden/svg-icons/src/16/plus-stroke.svg';
import { Item } from './Item';
import { IItemProps } from '../../../types';
import { StyledAddItem, StyledItemIcon } from '../../../styled';
import useMenuContext from '../../../utils/useMenuContext';

// eslint-disable-next-line react/display-name
const AddItemComponent = React.forwardRef<HTMLLIElement, IItemProps>(
  ({ children, disabled, ...props }, ref) => {
    const { isCompact } = useMenuContext();

    return (
      <StyledAddItem ref={ref} disabled={disabled} {...props}>
        <StyledItemIcon isCompact={isCompact} isVisible isDisabled={disabled}>
          <AddSvg />
        </StyledItemIcon>
        {children}
      </StyledAddItem>
    );
  }
);

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const AddItem = React.forwardRef<HTMLLIElement, Omit<IItemProps, 'component' | 'hasIcon'>>(
  (props, ref) => <Item component={AddItemComponent} ref={ref} {...props} hasIcon />
);

AddItem.displayName = 'AddItem';

AddItem.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool
};
