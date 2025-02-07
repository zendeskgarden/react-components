/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Item } from './OrderedListItem';
import { IOrderedListProps, SIZE, TYPE_ORDERED_LIST } from '../../types';
import { OrderedListContext } from '../../utils/useOrderedListContext';
import { StyledOrderedList } from '../../styled';

const OrderedListComponent = React.forwardRef<HTMLOListElement, IOrderedListProps>(
  ({ size = 'medium', type = 'decimal', ...other }, ref) => {
    const value = useMemo(() => ({ size: size! }), [size]);

    return (
      <OrderedListContext.Provider value={value}>
        <StyledOrderedList ref={ref} $listType={type} {...other} />
      </OrderedListContext.Provider>
    );
  }
);

OrderedListComponent.displayName = 'OrderedList';

OrderedListComponent.propTypes = {
  size: PropTypes.oneOf(SIZE),
  type: PropTypes.oneOf(TYPE_ORDERED_LIST)
};

/**
 * @extends OlHTMLAttributes<HTMLOListElement>
 */
export const OrderedList = OrderedListComponent as typeof OrderedListComponent & {
  Item: typeof Item;
};

OrderedList.Item = Item;
