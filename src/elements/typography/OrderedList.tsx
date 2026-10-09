/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { useMemo, forwardRef } from 'react';

import {
  OrderedListProvider,
  OrderedListProvider
} from '../../context/typography/OrderedListContext';
import { IOrderedListProps, SIZE, TYPE_ORDERED_LIST } from '../../types/elements';
import { StyledOrderedList } from '../../views/typography/StyledList';
import { COMPONENT_IDS } from '../utils';
import { Item } from './OrderedListItem';

const OrderedListComponent = forwardRef<HTMLOListElement, IOrderedListProps>(
  ({ size = 'medium', type = 'decimal', ...other }, ref) => {
    const value = useMemo(() => ({ size: size! }), [size]);

    return (
      <OrderedListProvider value={value}>
        <StyledOrderedList
          ref={ref}
          $listType={type}
          {...other}
          data-garden-id={COMPONENT_IDS['typography.ordered_list']}
          data-garden-version={PACKAGE_VERSION}
        />
      </OrderedListProvider>
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
