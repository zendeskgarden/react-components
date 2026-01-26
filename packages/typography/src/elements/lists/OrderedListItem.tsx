/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes } from 'react';

import { StyledOrderedListItem } from '../../styled';
import useOrderedListContext from '../../utils/useOrderedListContext';

const OrderedListItem = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>((props, ref) => {
  const { size } = useOrderedListContext();

  return <StyledOrderedListItem ref={ref} $space={size} {...props} />;
});

OrderedListItem.displayName = 'OrderedList.Item';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Item = OrderedListItem;
