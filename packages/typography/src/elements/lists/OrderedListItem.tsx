/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { LiHTMLAttributes } from 'react';
import useOrderedListContext from '../../utils/useOrderedListContext';
import { StyledOrderedListItem, StyledOrderedListItemContent } from '../../styled';

const OrderedListItem: React.FunctionComponent<
  LiHTMLAttributes<HTMLLIElement> & React.RefAttributes<HTMLLIElement>
> = React.forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>(
  ({ children, ...other }, ref) => {
    const { size } = useOrderedListContext();

    return (
      <StyledOrderedListItem ref={ref} {...other}>
        <StyledOrderedListItemContent space={size}>{children}</StyledOrderedListItemContent>
      </StyledOrderedListItem>
    );
  }
);

OrderedListItem.displayName = 'OrderedListItem';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export default OrderedListItem;
