/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Item } from './UnorderedListItem.js';
import { SIZE, TYPE_UNORDERED_LIST } from '../../types/index.js';
import { UnorderedListContext } from '../../utils/useUnorderedListContext.js';
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
import { StyledUnorderedList } from '../../styled/StyledList.js';
import '../../styled/StyledListItem.js';
import '../../styled/StyledParagraph.js';

const UnorderedListComponent = forwardRef((_ref, ref) => {
  let {
    size = 'medium',
    type = 'disc',
    ...other
  } = _ref;
  const value = useMemo(() => ({
    size: size
  }), [size]);
  return React.createElement(UnorderedListContext.Provider, {
    value: value
  }, React.createElement(StyledUnorderedList, Object.assign({
    ref: ref,
    $listType: type
  }, other)));
});
UnorderedListComponent.displayName = 'UnorderedList';
UnorderedListComponent.propTypes = {
  size: PropTypes.oneOf(SIZE),
  type: PropTypes.oneOf(TYPE_UNORDERED_LIST)
};
const UnorderedList = UnorderedListComponent;
UnorderedList.Item = Item;

export { UnorderedList };
