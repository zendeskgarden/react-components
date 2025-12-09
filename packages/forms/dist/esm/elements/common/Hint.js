/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useEffect } from 'react';
import useFieldContext from '../../utils/useFieldContext.js';
import useInputContext from '../../utils/useInputContext.js';
import '../../styled/common/StyledField.js';
import '../../styled/common/StyledFieldset.js';
import '../../styled/common/StyledLegend.js';
import { StyledHint } from '../../styled/common/StyledHint.js';
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
import { StyledCheckHint } from '../../styled/checkbox/StyledCheckHint.js';
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
import { StyledRadioHint } from '../../styled/radio/StyledRadioHint.js';
import '../../styled/radio/StyledRadioInput.js';
import '../../styled/radio/StyledRadioMessage.js';
import '../../styled/radio/StyledRadioSvg.js';
import '../../styled/toggle/StyledToggleLabel.js';
import { StyledToggleHint } from '../../styled/toggle/StyledToggleHint.js';
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

const Hint = React__default.forwardRef((props, ref) => {
  const {
    hasHint,
    setHasHint,
    getHintProps
  } = useFieldContext() || {};
  const type = useInputContext();
  useEffect(() => {
    if (!hasHint && setHasHint) {
      setHasHint(true);
    }
    return () => {
      if (hasHint && setHasHint) {
        setHasHint(false);
      }
    };
  }, [hasHint, setHasHint]);
  let HintComponent;
  if (type === 'checkbox') {
    HintComponent = StyledCheckHint;
  } else if (type === 'radio') {
    HintComponent = StyledRadioHint;
  } else if (type === 'toggle') {
    HintComponent = StyledToggleHint;
  } else {
    HintComponent = StyledHint;
  }
  let combinedProps = props;
  if (getHintProps) {
    combinedProps = getHintProps(combinedProps);
  }
  return React__default.createElement(HintComponent, Object.assign({
    ref: ref
  }, combinedProps));
});
Hint.displayName = 'Field.Hint';

export { Hint };
