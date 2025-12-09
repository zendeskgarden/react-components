/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useRef, useState, useCallback, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { mergeRefs } from 'react-merge-refs';
import { VALIDATION } from '../types/index.js';
import useFieldContext from '../utils/useFieldContext.js';
import '../styled/common/StyledField.js';
import '../styled/common/StyledFieldset.js';
import '../styled/common/StyledLegend.js';
import '../styled/common/StyledHint.js';
import '../styled/common/StyledLabel.js';
import '../styled/common/StyledMessage.js';
import '../styled/common/StyledMessageIcon.js';
import '../styled/text/StyledTextInput.js';
import { StyledTextarea } from '../styled/text/StyledTextarea.js';
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
import '../styled/range/StyledRangeInput.js';
import '../styled/tiles/StyledTile.js';
import '../styled/tiles/StyledTileDescription.js';
import '../styled/tiles/StyledTileIcon.js';
import '../styled/tiles/StyledTileInput.js';
import '../styled/tiles/StyledTileLabel.js';

const parseStyleValue = value => {
  return parseInt(value, 10) || 0;
};
const Textarea = React__default.forwardRef(({
  isCompact,
  isBare,
  focusInset,
  isResizable,
  minRows,
  maxRows,
  style,
  validation,
  onChange,
  onSelect,
  ...other
}, ref) => {
  const fieldContext = useFieldContext();
  const textAreaRef = useRef();
  const shadowTextAreaRef = useRef(null);
  const [state, setState] = useState({
    overflow: false,
    height: 0
  });
  const isControlled = other.value !== null && other.value !== undefined;
  const isAutoResizable = (minRows !== undefined || maxRows !== undefined) && !isResizable;
  const calculateHeight = useCallback(() => {
    if (!isAutoResizable) {
      return;
    }
    const textarea = textAreaRef.current;
    const computedStyle = window.getComputedStyle(textarea);
    const shadowTextArea = shadowTextAreaRef.current;
    shadowTextArea.style.width = computedStyle.width;
    shadowTextArea.value = textarea.value || textarea.placeholder || ' ';
    const boxSizing = computedStyle.boxSizing;
    const padding = parseStyleValue(computedStyle.paddingBottom) + parseStyleValue(computedStyle.paddingTop);
    const border = parseStyleValue(computedStyle.borderTopWidth) + parseStyleValue(computedStyle.borderBottomWidth);
    const innerHeight = shadowTextArea.scrollHeight - padding;
    shadowTextArea.value = 'x';
    const singleRowHeight = shadowTextArea.scrollHeight - padding;
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    const updatedHeight = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;
    setState(prevState => {
      if (updatedHeight > 0 && Math.abs((prevState.height || 0) - updatedHeight) > 1 || prevState.overflow !== overflow) {
        return {
          overflow,
          height: updatedHeight
        };
      }
      return prevState;
    });
  }, [maxRows, minRows, textAreaRef, isAutoResizable]);
  const onChangeHandler = useCallback(e => {
    if (!isControlled) {
      calculateHeight();
    }
    if (onChange) {
      onChange(e);
    }
  }, [calculateHeight, isControlled, onChange]);
  useLayoutEffect(() => {
    calculateHeight();
  });
  const computedStyle = {};
  if (isAutoResizable) {
    computedStyle.height = state.height;
    computedStyle.overflow = state.overflow ? 'hidden' : undefined;
  }
  const onSelectHandler = other.readOnly ? composeEventHandlers(onSelect, event => {
    event.currentTarget.select();
  }) : onSelect;
  let combinedProps = {
    $focusInset: focusInset,
    $isBare: isBare,
    $isCompact: isCompact,
    $isResizable: isResizable,
    $validation: validation,
    onChange: onChangeHandler,
    onSelect: onSelectHandler,
    ref: mergeRefs([textAreaRef, ref]),
    rows: minRows,
    style: {
      ...computedStyle,
      ...style
    },
    ...other
  };
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps);
  }
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(StyledTextarea, combinedProps), !!isAutoResizable && React__default.createElement(StyledTextarea, {
    $isBare: isBare,
    $isCompact: isCompact,
    $isHidden: true,
    "aria-hidden": true,
    className: other.className,
    readOnly: true,
    ref: shadowTextAreaRef,
    style: style,
    tabIndex: -1
  }));
});
Textarea.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  isResizable: PropTypes.bool,
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
  validation: PropTypes.oneOf(VALIDATION)
};
Textarea.displayName = 'Textarea';

export { Textarea };
