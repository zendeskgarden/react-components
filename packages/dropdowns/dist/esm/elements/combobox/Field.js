/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useState, useMemo } from 'react';
import { FieldContext } from '../../context/useFieldContext.js';
import '../../views/combobox/StyledCombobox.js';
import '../../views/combobox/StyledContainer.js';
import { StyledField } from '../../views/combobox/StyledField.js';
import '../../views/combobox/StyledFloatingListbox.js';
import '../../views/combobox/StyledHint.js';
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
import { Hint } from './Hint.js';
import { Label } from './Label.js';
import { Message } from './Message.js';

const FieldComponent = forwardRef((props, ref) => {
  const [labelProps, setLabelProps] = useState(undefined);
  const [hintProps, setHintProps] = useState(undefined);
  const [messageProps, setMessageProps] = useState(undefined);
  const [hasHint, setHasHint] = useState(false);
  const [hasMessage, setHasMessage] = useState(false);
  const contextValue = useMemo(() => ({
    labelProps,
    setLabelProps,
    hasHint,
    setHasHint,
    hintProps,
    setHintProps,
    hasMessage,
    setHasMessage,
    messageProps,
    setMessageProps
  }), [labelProps, setLabelProps, hasHint, setHasHint, hintProps, setHintProps, hasMessage, setHasMessage, messageProps, setMessageProps]);
  return React__default.createElement(FieldContext.Provider, {
    value: contextValue
  }, React__default.createElement(StyledField, Object.assign({}, props, {
    ref: ref
  })));
});
FieldComponent.displayName = 'Field';
const Field = FieldComponent;
Field.Hint = Hint;
Field.Label = Label;
Field.Message = Message;

export { Field };
