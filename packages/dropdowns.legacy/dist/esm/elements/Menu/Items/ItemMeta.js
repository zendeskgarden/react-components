/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import '../../../styled/menu/StyledMenu.js';
import '../../../styled/menu/StyledMenuWrapper.js';
import '../../../styled/menu/StyledSeparator.js';
import '../../../styled/items/StyledAddItem.js';
import '../../../styled/items/StyledItem.js';
import { StyledItemMeta } from '../../../styled/items/StyledItemMeta.js';
import '../../../styled/items/StyledNextItem.js';
import '../../../styled/items/StyledNextIcon.js';
import '../../../styled/items/StyledPreviousItem.js';
import '../../../styled/items/StyledPreviousIcon.js';
import '../../../styled/items/StyledItemIcon.js';
import '../../../styled/items/header/StyledHeaderIcon.js';
import '../../../styled/items/header/StyledHeaderItem.js';
import '../../../styled/items/media/StyledMediaBody.js';
import '../../../styled/items/media/StyledMediaFigure.js';
import '../../../styled/items/media/StyledMediaItem.js';
import '../../../styled/select/StyledFauxInput.js';
import '../../../styled/select/StyledInput.js';
import '../../../styled/select/StyledSelect.js';
import '../../../styled/multiselect/StyledMultiselectInput.js';
import '../../../styled/multiselect/StyledMultiselectItemsContainer.js';
import '../../../styled/multiselect/StyledMultiselectItemWrapper.js';
import '../../../styled/multiselect/StyledMultiselectMoreAnchor.js';
import useMenuContext from '../../../utils/useMenuContext.js';
import useItemContext from '../../../utils/useItemContext.js';

const ItemMeta = React__default.forwardRef((props, ref) => {
  const {
    isCompact
  } = useMenuContext();
  const {
    isDisabled
  } = useItemContext();
  return React__default.createElement(StyledItemMeta, Object.assign({
    ref: ref,
    $isCompact: isCompact,
    $isDisabled: isDisabled
  }, props));
});
ItemMeta.displayName = 'ItemMeta';

export { ItemMeta };
