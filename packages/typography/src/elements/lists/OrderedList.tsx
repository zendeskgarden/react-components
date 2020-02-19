/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
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
 * Accepts all `ol` attributes and events
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

/** @component */
export default (OrderedList as unknown) as React.FunctionComponent<
  IOrderedListProps & React.RefAttributes<HTMLOListElement>
> & {
  Item: typeof OrderedListItem;
};
