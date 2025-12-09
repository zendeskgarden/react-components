/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import PropTypes from 'prop-types';
import { Item } from './Item.js';
import '../../../styled/menu/StyledMenu.js';
import '../../../styled/menu/StyledMenuWrapper.js';
import '../../../styled/menu/StyledSeparator.js';
import '../../../styled/items/StyledAddItem.js';
import '../../../styled/items/StyledItem.js';
import '../../../styled/items/StyledItemMeta.js';
import { StyledNextItem } from '../../../styled/items/StyledNextItem.js';
import { StyledNextIcon } from '../../../styled/items/StyledNextIcon.js';
import '../../../styled/items/StyledPreviousItem.js';
import '../../../styled/items/StyledPreviousIcon.js';
import { StyledItemIcon } from '../../../styled/items/StyledItemIcon.js';
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
import useDropdownContext from '../../../utils/useDropdownContext.js';
import useMenuContext from '../../../utils/useMenuContext.js';

const NextItemComponent = React__default.forwardRef(({
  children,
  disabled,
  ...props
}, ref) => {
  const {
    isCompact
  } = useMenuContext();
  return React__default.createElement(StyledNextItem, Object.assign({
    ref: ref,
    disabled: disabled
  }, props), React__default.createElement(StyledItemIcon, {
    $isCompact: isCompact,
    $isDisabled: disabled,
    $isVisible: true
  }, React__default.createElement(StyledNextIcon, {
    $isDisabled: disabled
  })), children);
});
const NextItem = React__default.forwardRef(({
  value,
  disabled,
  ...props
}, ref) => {
  const {
    nextItemsHashRef,
    downshift: {
      itemToString
    }
  } = useDropdownContext();
  const {
    itemIndexRef
  } = useMenuContext();
  if (!disabled) {
    nextItemsHashRef.current[itemToString(value)] = itemIndexRef.current;
  }
  return React__default.createElement(Item, Object.assign({
    component: NextItemComponent,
    "aria-expanded": true,
    disabled: disabled,
    value: value,
    ref: ref
  }, props, {
    hasIcon: true
  }));
});
NextItem.displayName = 'NextItem';
NextItem.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool
};

export { NextItem };
