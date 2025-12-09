/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import { useDraggableListContext } from '../../../utils/useDraggableListContext.js';
import '../../../styled/draggable/StyledDraggable.js';
import '../../../styled/draggable/StyledContent.js';
import '../../../styled/draggable/StyledGrip.js';
import '../../../styled/draggable-list/StyledDraggableList.js';
import { StyledDropIndicator } from '../../../styled/draggable-list/StyledDropIndicator.js';
import '../../../styled/draggable-list/StyledItem.js';
import '../../../styled/dropzone/StyledDropzone.js';
import '../../../styled/dropzone/StyledMessage.js';
import '../../../styled/dropzone/StyledIcon.js';
import { useText } from '@zendeskgarden/react-theming';

const DropIndicator = forwardRef((props, ref) => {
  const {
    isHorizontal
  } = useDraggableListContext();
  const ariaLabel = useText(DropIndicator, props, 'aria-label', 'Drop indicator');
  return React__default.createElement(StyledDropIndicator, Object.assign({}, props, {
    "aria-label": ariaLabel,
    isHorizontal: isHorizontal,
    ref: ref
  }));
});
DropIndicator.displayName = 'DraggableList.DropIndicator';

export { DropIndicator };
