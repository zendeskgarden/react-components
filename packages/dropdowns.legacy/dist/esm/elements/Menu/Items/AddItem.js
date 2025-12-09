/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import PropTypes from 'prop-types';
import SvgPlusStroke from '../../../node_modules/@zendeskgarden/svg-icons/src/16/plus-stroke.svg.js';
import { Item } from './Item.js';
import '../../../styled/menu/StyledMenu.js';
import '../../../styled/menu/StyledMenuWrapper.js';
import '../../../styled/menu/StyledSeparator.js';
import { StyledAddItem } from '../../../styled/items/StyledAddItem.js';
import '../../../styled/items/StyledItem.js';
import '../../../styled/items/StyledItemMeta.js';
import '../../../styled/items/StyledNextItem.js';
import '../../../styled/items/StyledNextIcon.js';
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
import useMenuContext from '../../../utils/useMenuContext.js';

const AddItemComponent = React__default.forwardRef((_ref, ref) => {
  let {
    children,
    disabled,
    ...props
  } = _ref;
  const {
    isCompact
  } = useMenuContext();
  return React__default.createElement(StyledAddItem, Object.assign({
    ref: ref,
    disabled: disabled
  }, props), React__default.createElement(StyledItemIcon, {
    $isCompact: isCompact,
    $isVisible: true,
    $isDisabled: disabled
  }, React__default.createElement(SvgPlusStroke, null)), children);
});
const AddItem = React__default.forwardRef((props, ref) => React__default.createElement(Item, Object.assign({
  component: AddItemComponent,
  ref: ref
}, props, {
  hasIcon: true
})));
AddItem.displayName = 'AddItem';
AddItem.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool
};

export { AddItem };
