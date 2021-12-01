/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useMemo } from 'react';
import PropTypes from 'prop-types';
import OrderedListItem from './OrderedListItem';
import { OrderedListContext } from '../../utils/useOrderedListContext';
import { StyledOrderedList } from '../../styled';

export interface IOrderedListProps extends HTMLAttributes<HTMLOListElement> {
  /** Adjusts the vertical spacing between list items */
  size?: 'small' | 'medium' | 'large';
  /** Sets the marker style */
  type?:
    | 'decimal'
    | 'decimal-leading-zero'
    | 'lower-alpha'
    | 'lower-roman'
    | 'upper-alpha'
    | 'upper-roman';
}

const OrderedList = React.forwardRef<HTMLOListElement, IOrderedListProps>(
  ({ size, type, ...other }, ref) => {
    const value = useMemo(() => ({ size: size! }), [size]);

    return (
      <OrderedListContext.Provider value={value}>
        <StyledOrderedList ref={ref} listType={type} {...other} />
      </OrderedListContext.Provider>
    );
  }
);

OrderedList.displayName = 'OrderedList';

OrderedList.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf([
    'decimal',
    'decimal-leading-zero',
    'lower-alpha',
    'lower-roman',
    'upper-alpha',
    'upper-roman'
  ])
};

OrderedList.defaultProps = {
  size: 'medium',
  type: 'decimal'
};

(OrderedList as any).Item = OrderedListItem;

/**
 * @extends HTMLAttributes<HTMLOListElement>
 */
export default OrderedList as unknown as React.FunctionComponent<
  IOrderedListProps & React.RefAttributes<HTMLOListElement>
> & {
  Item: typeof OrderedListItem;
};
