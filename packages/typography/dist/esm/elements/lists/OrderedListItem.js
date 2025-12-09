/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { forwardRef } from 'react';
import useOrderedListContext from '../../utils/useOrderedListContext.js';
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
import '../../styled/StyledList.js';
import { StyledOrderedListItem } from '../../styled/StyledListItem.js';
import '../../styled/StyledParagraph.js';

const OrderedListItem = forwardRef((props, ref) => {
  const {
    size
  } = useOrderedListContext();
  return React.createElement(StyledOrderedListItem, Object.assign({
    ref: ref,
    $space: size
  }, props));
});
OrderedListItem.displayName = 'OrderedList.Item';
const Item$1 = OrderedListItem;

export { Item$1 as Item };
