/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useState, useMemo } from 'react';
import SvgTrashStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/trash-stroke.svg.js';
import { Message } from './components/Message.js';
import { Icon } from './components/Icon.js';
import '../../styled/draggable/StyledDraggable.js';
import '../../styled/draggable/StyledContent.js';
import '../../styled/draggable/StyledGrip.js';
import '../../styled/draggable-list/StyledDraggableList.js';
import '../../styled/draggable-list/StyledDropIndicator.js';
import '../../styled/draggable-list/StyledItem.js';
import { StyledDropzone } from '../../styled/dropzone/StyledDropzone.js';
import '../../styled/dropzone/StyledMessage.js';
import { StyledIcon } from '../../styled/dropzone/StyledIcon.js';
import { DropzoneContext } from '../../utils/useDropzoneContext.js';

const DropzoneComponent = forwardRef((_ref, ref) => {
  let {
    tag,
    isVertical,
    children,
    ...props
  } = _ref;
  const {
    isDanger
  } = props;
  const [hasMessage, setHasMessage] = useState(false);
  const [hasIcon, setHasIcon] = useState(false);
  const value = useMemo(() => ({
    isVertical,
    hasMessage,
    setHasMessage,
    hasIcon,
    setHasIcon,
    isDanger
  }), [hasMessage, hasIcon, isDanger, isVertical]);
  return React__default.createElement(DropzoneContext.Provider, {
    value: value
  }, React__default.createElement(StyledDropzone, Object.assign({
    as: tag,
    "aria-disabled": props.isDisabled
  }, props, {
    hasIcon: hasIcon,
    hasMessage: hasMessage,
    isVertical: isVertical,
    ref: ref
  }), hasMessage && isDanger && !hasIcon && React__default.createElement(StyledIcon, {
    "aria-hidden": "true",
    hasMessage: hasMessage,
    isVertical: isVertical
  }, React__default.createElement(SvgTrashStroke, null)), children));
});
DropzoneComponent.displayName = 'Dropzone';
const Dropzone = DropzoneComponent;
Dropzone.Message = Message;
Dropzone.Icon = Icon;

export { Dropzone };
