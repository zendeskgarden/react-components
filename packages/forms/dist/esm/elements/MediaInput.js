/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { mergeRefs } from 'react-merge-refs';
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
import { StyledTextMediaInput } from '../styled/text/StyledTextMediaInput.js';
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
import { FauxInput } from './faux-input/FauxInput.js';
import useFieldContext from '../utils/useFieldContext.js';

const MediaInput = React__default.forwardRef(({
  start,
  end,
  disabled,
  isCompact,
  isBare,
  focusInset,
  readOnly,
  validation,
  wrapperProps = {},
  wrapperRef,
  onSelect,
  ...props
}, ref) => {
  const fieldContext = useFieldContext();
  const inputRef = useRef();
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const {
    onClick,
    onFocus,
    onBlur,
    onMouseOver,
    onMouseOut,
    ...otherWrapperProps
  } = wrapperProps;
  const onFauxInputClickHandler = composeEventHandlers(onClick, () => {
    inputRef.current && inputRef.current.focus();
  });
  const onFauxInputFocusHandler = composeEventHandlers(onFocus, () => {
    setIsFocused(true);
  });
  const onFauxInputBlurHandler = composeEventHandlers(onBlur, () => {
    setIsFocused(false);
  });
  const onFauxInputMouseOverHandler = composeEventHandlers(onMouseOver, () => {
    setIsHovered(true);
  });
  const onFauxInputMouseOutHandler = composeEventHandlers(onMouseOut, () => {
    setIsHovered(false);
  });
  const onSelectHandler = readOnly ? composeEventHandlers(onSelect, event => {
    event.currentTarget.select();
  }) : onSelect;
  let combinedProps = {
    disabled,
    readOnly,
    ref: mergeRefs([inputRef, ref]),
    onSelect: onSelectHandler,
    ...props
  };
  let isLabelHovered;
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps);
    isLabelHovered = fieldContext.isLabelHovered;
  }
  return React__default.createElement(FauxInput, Object.assign({
    tabIndex: null,
    onClick: onFauxInputClickHandler,
    onFocus: onFauxInputFocusHandler,
    onBlur: onFauxInputBlurHandler,
    onMouseOver: onFauxInputMouseOverHandler,
    onMouseOut: onFauxInputMouseOutHandler,
    disabled: disabled,
    isFocused: isFocused,
    isHovered: isHovered || isLabelHovered,
    isCompact: isCompact,
    isBare: isBare,
    focusInset: focusInset,
    readOnly: readOnly,
    validation: validation,
    mediaLayout: true
  }, otherWrapperProps, {
    ref: wrapperRef
  }), !!start && React__default.createElement(FauxInput.StartIcon, {
    isDisabled: disabled,
    isFocused: isFocused,
    isHovered: isHovered || isLabelHovered
  }, start), React__default.createElement(StyledTextMediaInput, combinedProps), !!end && React__default.createElement(FauxInput.EndIcon, {
    isDisabled: disabled,
    isFocused: isFocused,
    isHovered: isHovered || isLabelHovered
  }, end));
});
MediaInput.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION),
  start: PropTypes.any,
  end: PropTypes.any,
  wrapperProps: PropTypes.object,
  wrapperRef: PropTypes.any
};
MediaInput.displayName = 'MediaInput';

export { MediaInput };
