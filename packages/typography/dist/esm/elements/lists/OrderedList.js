/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Item } from './OrderedListItem.js';
import { TYPE_ORDERED_LIST, SIZE } from '../../types/index.js';
import { OrderedListContext } from '../../utils/useOrderedListContext.js';
import '../../styled/StyledBlockquote.js';
import '../../styled/StyledCode.js';
import '../../styled/StyledCodeBlock.js';
import '../../styled/StyledCodeBlockContainer.js';
import '../../styled/StyledCodeBlockLine.js';
import '../../styled/StyledCodeBlockToken.js';
import '../../styled/StyledEllipsis.js';
import '../../styled/StyledFont.js';
import '../../styled/StyledIcon.js';
import '../../styled/StyledKbd.js';
import { StyledOrderedList } from '../../styled/StyledList.js';
import '../../styled/StyledListItem.js';
import '../../styled/StyledParagraph.js';

const OrderedListComponent = React.forwardRef(({
  size = 'medium',
  type = 'decimal',
  ...other
}, ref) => {
  const value = useMemo(() => ({
    size: size
  }), [size]);
  return React.createElement(OrderedListContext.Provider, {
    value: value
  }, React.createElement(StyledOrderedList, Object.assign({
    ref: ref,
    $listType: type
  }, other)));
});
OrderedListComponent.displayName = 'OrderedList';
OrderedListComponent.propTypes = {
  size: PropTypes.oneOf(SIZE),
  type: PropTypes.oneOf(TYPE_ORDERED_LIST)
};
const OrderedList = OrderedListComponent;
OrderedList.Item = Item;

export { OrderedList };
