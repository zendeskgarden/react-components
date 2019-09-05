/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import OrderedListItem from './OrderedListItem';
import { OrderedListContext } from '../../utils/useOrderedListContext';
import { StyledOrderedList } from '../../styled';

interface IOrderedListProps extends HTMLAttributes<HTMLOListElement> {
  size?: 'small' | 'medium' | 'large';
  type?:
    | 'decimal'
    | 'decimal-leading-zero'
    | 'lower-alpha'
    | 'lower-roman'
    | 'upper-alpha'
    | 'upper-roman';
}

/**
 * Accepts all `ol` props
 */
const OrderedList = React.forwardRef<HTMLOListElement, IOrderedListProps>(
  ({ size, type, ...other }, ref) => {
    return (
      <OrderedListContext.Provider value={{ size: size! }}>
        <StyledOrderedList ref={ref} listType={type!} {...other} />
      </OrderedListContext.Provider>
    );
  }
);

OrderedList.defaultProps = {
  size: 'medium',
  type: 'decimal'
};

(OrderedList as any).Item = OrderedListItem;

/** @component */
export default OrderedList as React.ForwardRefExoticComponent<
  IOrderedListProps & React.RefAttributes<HTMLOListElement>
> & {
  Item: typeof OrderedListItem;
};
