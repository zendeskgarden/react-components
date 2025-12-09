/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import { Content } from './components/Content.js';
import { Grip } from './components/Grip.js';
import { StyledDraggable } from '../../styled/draggable/StyledDraggable.js';
import '../../styled/draggable/StyledContent.js';
import '../../styled/draggable/StyledGrip.js';
import '../../styled/draggable-list/StyledDraggableList.js';
import '../../styled/draggable-list/StyledDropIndicator.js';
import '../../styled/draggable-list/StyledItem.js';
import '../../styled/dropzone/StyledDropzone.js';
import '../../styled/dropzone/StyledMessage.js';
import '../../styled/dropzone/StyledIcon.js';

const DraggableComponent = forwardRef((_ref, ref) => {
  let {
    focusInset,
    isBare,
    isCompact,
    isDisabled,
    isGrabbed,
    isPlaceholder,
    tag,
    ...other
  } = _ref;
  return React__default.createElement(StyledDraggable, Object.assign({
    $focusInset: focusInset,
    $isBare: isBare,
    $isCompact: isCompact,
    $isDisabled: isDisabled,
    $isGrabbed: isGrabbed,
    $isPlaceholder: isPlaceholder,
    "aria-disabled": isDisabled,
    as: tag,
    ref: ref,
    tabIndex: isDisabled ? undefined : 0
  }, other));
});
DraggableComponent.displayName = 'Draggable';
const Draggable = DraggableComponent;
Draggable.Grip = Grip;
Draggable.Content = Content;

export { Draggable };
