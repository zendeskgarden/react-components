/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import PropTypes from 'prop-types';
import SvgChevronDownStroke from '../node_modules/@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg.js';
import { VALIDATION } from '../types/index.js';
import '../styled/common/StyledField.js';
import '../styled/common/StyledFieldset.js';
import '../styled/common/StyledLegend.js';
import '../styled/common/StyledHint.js';
import '../styled/common/StyledLabel.js';
import '../styled/common/StyledMessage.js';
import '../styled/common/StyledMessageIcon.js';
import '../styled/text/StyledTextInput.js';
import '../styled/text/StyledTextarea.js';
import '../styled/text/StyledTextFauxInput.js';
import '../styled/text/StyledTextMediaInput.js';
import '../styled/text/StyledTextMediaFigure.js';
import '../styled/input-group/StyledInputGroup.js';
import '../styled/checkbox/StyledCheckLabel.js';
import '../styled/checkbox/StyledCheckHint.js';
import '../styled/checkbox/StyledCheckInput.js';
import '../styled/checkbox/StyledCheckMessage.js';
import '../styled/checkbox/StyledCheckSvg.js';
import '../styled/checkbox/StyledDashSvg.js';
import '../styled/file-upload/StyledFileUpload.js';
import '../styled/file-list/StyledFile.js';
import '../styled/file-list/StyledFileClose.js';
import '../styled/file-list/StyledFileDelete.js';
import '../styled/file-list/StyledFileIcon.js';
import '../styled/file-list/StyledFileList.js';
import '../styled/file-list/StyledFileListItem.js';
import '../styled/radio/StyledRadioLabel.js';
import '../styled/radio/StyledRadioHint.js';
import '../styled/radio/StyledRadioInput.js';
import '../styled/radio/StyledRadioMessage.js';
import '../styled/radio/StyledRadioSvg.js';
import '../styled/toggle/StyledToggleLabel.js';
import '../styled/toggle/StyledToggleHint.js';
import '../styled/toggle/StyledToggleInput.js';
import '../styled/toggle/StyledToggleMessage.js';
import '../styled/toggle/StyledToggleSvg.js';
import { StyledSelect } from '../styled/select/StyledSelect.js';
import { StyledSelectWrapper } from '../styled/select/StyledSelectWrapper.js';
import '../styled/range/StyledRangeInput.js';
import '../styled/tiles/StyledTile.js';
import '../styled/tiles/StyledTileDescription.js';
import '../styled/tiles/StyledTileIcon.js';
import '../styled/tiles/StyledTileInput.js';
import '../styled/tiles/StyledTileLabel.js';
import { FauxInput } from './faux-input/FauxInput.js';
import useFieldContext from '../utils/useFieldContext.js';

const Select = React__default.forwardRef((_ref, ref) => {
  let {
    disabled,
    isCompact,
    validation,
    focusInset,
    isBare,
    ...props
  } = _ref;
  const fieldContext = useFieldContext();
  let combinedProps = {
    $focusInset: focusInset,
    $isBare: isBare,
    $isCompact: isCompact,
    $validation: validation,
    disabled,
    ref,
    ...props
  };
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps);
  }
  return React__default.createElement(StyledSelectWrapper, {
    $isCompact: isCompact,
    $isBare: isBare,
    $isDisabled: disabled,
    $validation: validation,
    $focusInset: focusInset
  }, React__default.createElement(StyledSelect, combinedProps), !isBare && React__default.createElement(FauxInput.EndIcon, {
    isDisabled: disabled
  }, React__default.createElement(SvgChevronDownStroke, null)));
});
Select.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION)
};
Select.displayName = 'Select';

export { Select };
