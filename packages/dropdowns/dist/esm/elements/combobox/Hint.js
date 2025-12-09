/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useEffect } from 'react';
import useFieldContext from '../../context/useFieldContext.js';
import '../../views/combobox/StyledCombobox.js';
import '../../views/combobox/StyledContainer.js';
import '../../views/combobox/StyledField.js';
import '../../views/combobox/StyledFloatingListbox.js';
import { StyledHint } from '../../views/combobox/StyledHint.js';
import '../../views/combobox/StyledInput.js';
import '../../views/combobox/StyledInputGroup.js';
import '../../views/combobox/StyledInputIcon.js';
import '../../views/combobox/StyledLabel.js';
import '../../views/combobox/StyledListbox.js';
import '../../views/combobox/StyledListboxSeparator.js';
import '../../views/combobox/StyledMessage.js';
import '../../views/combobox/StyledOptGroup.js';
import '../../views/combobox/StyledOption.js';
import '../../views/combobox/StyledOptionContent.js';
import '../../views/combobox/StyledOptionIcon.js';
import '../../views/combobox/StyledOptionMeta.js';
import '../../views/combobox/StyledOptionSelectionIcon.js';
import '../../views/combobox/StyledOptionTypeIcon.js';
import '../../views/combobox/StyledTag.js';
import '../../views/combobox/StyledTagsButton.js';
import '../../views/combobox/StyledTrigger.js';
import '../../views/combobox/StyledValue.js';
import '../../views/menu/StyledMenu.js';
import '../../views/menu/StyledFloatingMenu.js';
import '../../views/menu/StyledItem.js';
import '../../views/menu/StyledItemAnchor.js';
import '../../views/menu/StyledItemContent.js';
import '../../views/menu/StyledItemGroup.js';
import '../../views/menu/StyledItemIcon.js';
import '../../views/menu/StyledItemMeta.js';
import '../../views/menu/StyledItemTypeIcon.js';
import '../../views/menu/StyledSeparator.js';

const Hint = forwardRef((props, ref) => {
  const {
    hintProps,
    setHasHint
  } = useFieldContext();
  useEffect(() => {
    setHasHint(true);
    return () => setHasHint(false);
  }, [setHasHint]);
  return React__default.createElement(StyledHint, Object.assign({}, hintProps, props, {
    ref: ref
  }));
});
Hint.displayName = 'Field.Hint';

export { Hint };
