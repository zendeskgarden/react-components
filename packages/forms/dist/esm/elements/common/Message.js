/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useText } from '@zendeskgarden/react-theming';
import { VALIDATION } from '../../types/index.js';
import useFieldContext from '../../utils/useFieldContext.js';
import useInputContext from '../../utils/useInputContext.js';
import '../../styled/common/StyledField.js';
import '../../styled/common/StyledFieldset.js';
import '../../styled/common/StyledLegend.js';
import '../../styled/common/StyledHint.js';
import '../../styled/common/StyledLabel.js';
import { StyledMessage } from '../../styled/common/StyledMessage.js';
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
import { StyledCheckMessage } from '../../styled/checkbox/StyledCheckMessage.js';
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
import { StyledRadioMessage } from '../../styled/radio/StyledRadioMessage.js';
import '../../styled/radio/StyledRadioSvg.js';
import '../../styled/toggle/StyledToggleLabel.js';
import '../../styled/toggle/StyledToggleHint.js';
import '../../styled/toggle/StyledToggleInput.js';
import { StyledToggleMessage } from '../../styled/toggle/StyledToggleMessage.js';
import '../../styled/toggle/StyledToggleSvg.js';
import '../../styled/select/StyledSelect.js';
import '../../styled/select/StyledSelectWrapper.js';
import '../../styled/range/StyledRangeInput.js';
import '../../styled/tiles/StyledTile.js';
import '../../styled/tiles/StyledTileDescription.js';
import '../../styled/tiles/StyledTileIcon.js';
import '../../styled/tiles/StyledTileInput.js';
import '../../styled/tiles/StyledTileLabel.js';
import { MessageIcon } from './MessageIcon.js';

const Message = React__default.forwardRef(({
  validation,
  validationLabel,
  children,
  ...other
}, ref) => {
  const {
    hasMessage,
    setHasMessage,
    getMessageProps
  } = useFieldContext() || {};
  const type = useInputContext();
  useEffect(() => {
    if (!hasMessage && setHasMessage) {
      setHasMessage(true);
    }
    return () => {
      if (hasMessage && setHasMessage) {
        setHasMessage(false);
      }
    };
  }, [hasMessage, setHasMessage]);
  let MessageComponent;
  if (type === 'checkbox') {
    MessageComponent = StyledCheckMessage;
  } else if (type === 'radio') {
    MessageComponent = StyledRadioMessage;
  } else if (type === 'toggle') {
    MessageComponent = StyledToggleMessage;
  } else {
    MessageComponent = StyledMessage;
  }
  let combinedProps = {
    $validation: validation,
    $validationLabel: validationLabel,
    ...other
  };
  if (getMessageProps) {
    combinedProps = getMessageProps(combinedProps);
  }
  const ariaLabel = useText(Message, combinedProps, '$validationLabel', validation, validation !== undefined);
  return React__default.createElement(MessageComponent, Object.assign({
    ref: ref
  }, combinedProps), !!validation && React__default.createElement(MessageIcon, {
    validation: validation,
    "aria-label": ariaLabel
  }), children);
});
Message.displayName = 'Field.Message';
Message.propTypes = {
  validation: PropTypes.oneOf(VALIDATION),
  validationLabel: PropTypes.string
};

export { Message };
