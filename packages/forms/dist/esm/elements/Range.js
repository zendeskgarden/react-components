/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useState, useRef, useCallback, useEffect } from 'react';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { mergeRefs } from 'react-merge-refs';
import useFieldContext from '../utils/useFieldContext.js';
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
import '../styled/select/StyledSelect.js';
import '../styled/select/StyledSelectWrapper.js';
import { StyledRangeInput } from '../styled/range/StyledRangeInput.js';
import '../styled/tiles/StyledTile.js';
import '../styled/tiles/StyledTileDescription.js';
import '../styled/tiles/StyledTileIcon.js';
import '../styled/tiles/StyledTileInput.js';
import '../styled/tiles/StyledTileLabel.js';

const Range = React__default.forwardRef((_ref, ref) => {
  let {
    hasLowerTrack = true,
    min = 0,
    max = 100,
    step = 1,
    ...other
  } = _ref;
  const [backgroundSize, setBackgroundSize] = useState('0');
  const rangeRef = useRef();
  const fieldContext = useFieldContext();
  const updateBackgroundWidthFromInput = useCallback(rangeTarget => {
    let relativeMax = max;
    const {
      value
    } = rangeTarget;
    if (parseFloat(relativeMax) < parseFloat(min)) {
      relativeMax = 100;
    }
    const percentage = 100 * (value - min) / (relativeMax - min);
    setBackgroundSize(`${percentage}%`);
  },
  [max, min, step]);
  useEffect(() => {
    updateBackgroundWidthFromInput(rangeRef.current);
  }, [rangeRef, updateBackgroundWidthFromInput, other.value]);
  const onChange = hasLowerTrack ? composeEventHandlers(other.onChange, event => {
    updateBackgroundWidthFromInput(event.target);
  }) : other.onChange;
  let combinedProps = {
    $backgroundSize: backgroundSize,
    $hasLowerTrack: hasLowerTrack,
    max,
    min,
    ref: mergeRefs([rangeRef, ref]),
    step,
    ...other,
    onChange
  };
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps);
  }
  return React__default.createElement(StyledRangeInput, combinedProps);
});
Range.displayName = 'Range';

export { Range };
