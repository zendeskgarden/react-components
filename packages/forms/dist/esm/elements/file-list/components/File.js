/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useMemo, Children } from 'react';
import PropTypes from 'prop-types';
import { FILE_TYPE, FILE_VALIDATION } from '../../../types/index.js';
import { Close } from './Close.js';
import { Delete } from './Delete.js';
import '../../../styled/common/StyledField.js';
import '../../../styled/common/StyledFieldset.js';
import '../../../styled/common/StyledLegend.js';
import '../../../styled/common/StyledHint.js';
import '../../../styled/common/StyledLabel.js';
import '../../../styled/common/StyledMessage.js';
import '../../../styled/common/StyledMessageIcon.js';
import '../../../styled/text/StyledTextInput.js';
import '../../../styled/text/StyledTextarea.js';
import '../../../styled/text/StyledTextFauxInput.js';
import '../../../styled/text/StyledTextMediaInput.js';
import '../../../styled/text/StyledTextMediaFigure.js';
import '../../../styled/input-group/StyledInputGroup.js';
import '../../../styled/checkbox/StyledCheckLabel.js';
import '../../../styled/checkbox/StyledCheckHint.js';
import '../../../styled/checkbox/StyledCheckInput.js';
import '../../../styled/checkbox/StyledCheckMessage.js';
import '../../../styled/checkbox/StyledCheckSvg.js';
import '../../../styled/checkbox/StyledDashSvg.js';
import '../../../styled/file-upload/StyledFileUpload.js';
import { StyledFile } from '../../../styled/file-list/StyledFile.js';
import '../../../styled/file-list/StyledFileClose.js';
import '../../../styled/file-list/StyledFileDelete.js';
import { StyledFileIcon } from '../../../styled/file-list/StyledFileIcon.js';
import '../../../styled/file-list/StyledFileList.js';
import '../../../styled/file-list/StyledFileListItem.js';
import '../../../styled/radio/StyledRadioLabel.js';
import '../../../styled/radio/StyledRadioHint.js';
import '../../../styled/radio/StyledRadioInput.js';
import '../../../styled/radio/StyledRadioMessage.js';
import '../../../styled/radio/StyledRadioSvg.js';
import '../../../styled/toggle/StyledToggleLabel.js';
import '../../../styled/toggle/StyledToggleHint.js';
import '../../../styled/toggle/StyledToggleInput.js';
import '../../../styled/toggle/StyledToggleMessage.js';
import '../../../styled/toggle/StyledToggleSvg.js';
import '../../../styled/select/StyledSelect.js';
import '../../../styled/select/StyledSelectWrapper.js';
import '../../../styled/range/StyledRangeInput.js';
import '../../../styled/tiles/StyledTile.js';
import '../../../styled/tiles/StyledTileDescription.js';
import '../../../styled/tiles/StyledTileIcon.js';
import '../../../styled/tiles/StyledTileInput.js';
import '../../../styled/tiles/StyledTileLabel.js';
import { FileContext } from '../../../utils/useFileContext.js';
import { fileIconsCompact, fileIconsDefault } from '../utils.js';

const FileComponent = forwardRef((_ref, ref) => {
  let {
    children,
    type,
    isCompact,
    focusInset,
    validation,
    ...props
  } = _ref;
  const fileContextValue = useMemo(() => ({
    isCompact
  }), [isCompact]);
  const validationType = validation || type;
  return React__default.createElement(FileContext.Provider, {
    value: fileContextValue
  }, React__default.createElement(StyledFile, Object.assign({}, props, {
    $isCompact: isCompact,
    $focusInset: focusInset,
    $validation: validation,
    ref: ref
  }), !!validationType && React__default.createElement(StyledFileIcon, {
    $isCompact: isCompact,
    $validation: validation
  }, isCompact ? fileIconsCompact[validationType] : fileIconsDefault[validationType]), Children.map(children, child => typeof child === 'string' ? React__default.createElement("span", null, child) : child)));
});
FileComponent.displayName = 'File';
FileComponent.propTypes = {
  focusInset: PropTypes.bool,
  isCompact: PropTypes.bool,
  type: PropTypes.oneOf(FILE_TYPE),
  validation: PropTypes.oneOf(FILE_VALIDATION)
};
const File = FileComponent;
File.Close = Close;
File.Delete = Delete;

export { File };
