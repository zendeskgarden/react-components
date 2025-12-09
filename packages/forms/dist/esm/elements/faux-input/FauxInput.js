/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { VALIDATION } from '../../types/index.js';
import '../../styled/common/StyledField.js';
import '../../styled/common/StyledFieldset.js';
import '../../styled/common/StyledLegend.js';
import '../../styled/common/StyledHint.js';
import '../../styled/common/StyledLabel.js';
import '../../styled/common/StyledMessage.js';
import '../../styled/common/StyledMessageIcon.js';
import '../../styled/text/StyledTextInput.js';
import '../../styled/text/StyledTextarea.js';
import { StyledTextFauxInput } from '../../styled/text/StyledTextFauxInput.js';
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
import { StartIcon } from './components/StartIcon.js';
import { EndIcon } from './components/EndIcon.js';

const FauxInputComponent = forwardRef(({
  disabled,
  focusInset,
  isBare,
  isCompact,
  isFocused: controlledIsFocused,
  isHovered,
  onBlur,
  onFocus,
  readOnly,
  validation,
  mediaLayout,
  ...other
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const onFocusHandler = composeEventHandlers(onFocus, () => {
    setIsFocused(true);
  });
  const onBlurHandler = composeEventHandlers(onBlur, () => {
    setIsFocused(false);
  });
  return React__default.createElement(StyledTextFauxInput, Object.assign({
    onFocus: onFocusHandler,
    onBlur: onBlurHandler,
    $focusInset: focusInset,
    $isBare: isBare,
    $isCompact: isCompact,
    $isDisabled: disabled,
    $isFocused: controlledIsFocused === undefined ? isFocused : controlledIsFocused,
    $isHovered: isHovered,
    $isReadOnly: readOnly,
    $mediaLayout: mediaLayout,
    $validation: validation,
    tabIndex: disabled ? undefined : 0
  }, other, {
    ref: ref
  }));
});
FauxInputComponent.displayName = 'FauxInput';
FauxInputComponent.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION),
  isFocused: PropTypes.bool,
  isHovered: PropTypes.bool
};
const FauxInput = FauxInputComponent;
FauxInput.EndIcon = EndIcon;
FauxInput.StartIcon = StartIcon;

export { FauxInput };
