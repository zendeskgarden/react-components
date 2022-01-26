/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { OlHTMLAttributes, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Item } from './OrderedListItem';
import { OrderedListContext } from '../../utils/useOrderedListContext';
import { StyledOrderedList } from '../../styled';

export interface IOrderedListProps extends Omit<OlHTMLAttributes<HTMLOListElement>, 'type'> {
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

const OrderedListComponent = React.forwardRef<HTMLOListElement, IOrderedListProps>(
  ({ size, type, ...other }, ref) => {
    const value = useMemo(() => ({ size: size! }), [size]);

    return (
      <OrderedListContext.Provider value={value}>
        <StyledOrderedList ref={ref} listType={type} {...other} />
      </OrderedListContext.Provider>
    );
  }
);

OrderedListComponent.displayName = 'OrderedList';

OrderedListComponent.propTypes = {
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

OrderedListComponent.defaultProps = {
  size: 'medium',
  type: 'decimal'
};

/**
 * @extends OlHTMLAttributes<HTMLOListElement>
 */
export const OrderedList = OrderedListComponent as typeof OrderedListComponent & {
  Item: typeof Item;
};

OrderedList.Item = Item;
