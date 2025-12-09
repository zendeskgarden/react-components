/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useState, useMemo } from 'react';
import { useField } from '@zendeskgarden/container-field';
import { FieldContext } from '../../utils/useFieldContext.js';
import { StyledField } from '../../styled/common/StyledField.js';
import '../../styled/common/StyledFieldset.js';
import '../../styled/common/StyledLegend.js';
import '../../styled/common/StyledHint.js';
import '../../styled/common/StyledLabel.js';
import '../../styled/common/StyledMessage.js';
import '../../styled/common/StyledMessageIcon.js';
import '../../styled/text/StyledTextInput.js';
import '../../styled/text/StyledTextarea.js';
import '../../styled/text/StyledTextFauxInput.js';
import '../../styled/text/StyledTextMediaInput.js';
import '../../styled/text/StyledTextMediaFigure.js';
import '../../styled/input-group/StyledInputGroup.js';
import '../../styled/checkbox/StyledCheckLabel.js';
import '../../styled/checkbox/StyledCheckHint.js';
import '../../styled/checkbox/StyledCheckInput.js';
import '../../styled/checkbox/StyledCheckMessage.js';
import '../../styled/checkbox/StyledCheckSvg.js';
import '../../styled/checkbox/StyledDashSvg.js';
import '../../styled/file-upload/StyledFileUpload.js';
import '../../styled/file-list/StyledFile.js';
import '../../styled/file-list/StyledFileClose.js';
import '../../styled/file-list/StyledFileDelete.js';
import '../../styled/file-list/StyledFileIcon.js';
import '../../styled/file-list/StyledFileList.js';
import '../../styled/file-list/StyledFileListItem.js';
import '../../styled/radio/StyledRadioLabel.js';
import '../../styled/radio/StyledRadioHint.js';
import '../../styled/radio/StyledRadioInput.js';
import '../../styled/radio/StyledRadioMessage.js';
import '../../styled/radio/StyledRadioSvg.js';
import '../../styled/toggle/StyledToggleLabel.js';
import '../../styled/toggle/StyledToggleHint.js';
import '../../styled/toggle/StyledToggleInput.js';
import '../../styled/toggle/StyledToggleMessage.js';
import '../../styled/toggle/StyledToggleSvg.js';
import '../../styled/select/StyledSelect.js';
import '../../styled/select/StyledSelectWrapper.js';
import '../../styled/range/StyledRangeInput.js';
import '../../styled/tiles/StyledTile.js';
import '../../styled/tiles/StyledTileDescription.js';
import '../../styled/tiles/StyledTileIcon.js';
import '../../styled/tiles/StyledTileInput.js';
import '../../styled/tiles/StyledTileLabel.js';
import { Hint } from './Hint.js';
import { Message } from './Message.js';
import { Label } from './Label.js';

const FieldComponent = React__default.forwardRef((props, ref) => {
  const [hasHint, setHasHint] = useState(false);
  const [hasMessage, setHasMessage] = useState(false);
  const [isLabelActive, setIsLabelActive] = useState(false);
  const [isLabelHovered, setIsLabelHovered] = useState(false);
  const {
    getInputProps,
    getMessageProps,
    ...propGetters
  } = useField({
    idPrefix: props.id,
    hasHint,
    hasMessage
  });
  const fieldProps = useMemo(() => ({
    ...propGetters,
    getInputProps,
    getMessageProps,
    isLabelActive,
    setIsLabelActive,
    isLabelHovered,
    setIsLabelHovered,
    hasHint,
    setHasHint,
    hasMessage,
    setHasMessage
  }), [propGetters, getInputProps, getMessageProps, isLabelActive, isLabelHovered, hasHint, hasMessage]);
  return React__default.createElement(FieldContext.Provider, {
    value: fieldProps
  }, React__default.createElement(StyledField, Object.assign({}, props, {
    ref: ref
  })));
});
FieldComponent.displayName = 'Field';
const Field = FieldComponent;
Field.Hint = Hint;
Field.Label = Label;
Field.Message = Message;

export { Field, FieldComponent };
