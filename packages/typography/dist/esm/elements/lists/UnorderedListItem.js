/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { forwardRef } from 'react';
import useUnorderedListContext from '../../utils/useUnorderedListContext.js';
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
import { StyledUnorderedListItem } from '../../styled/StyledListItem.js';
import '../../styled/StyledParagraph.js';

const UnorderedListItem = forwardRef((props, ref) => {
  const {
    size
  } = useUnorderedListContext();
  return React.createElement(StyledUnorderedListItem, Object.assign({
    ref: ref,
    $space: size
  }, props));
});
UnorderedListItem.displayName = 'UnorderedList.Item';
const Item = UnorderedListItem;

export { Item };
