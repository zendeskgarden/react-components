/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import '../../../styled/draggable/StyledDraggable.js';
import '../../../styled/draggable/StyledContent.js';
import '../../../styled/draggable/StyledGrip.js';
import '../../../styled/draggable-list/StyledDraggableList.js';
import '../../../styled/draggable-list/StyledDropIndicator.js';
import { StyledItem } from '../../../styled/draggable-list/StyledItem.js';
import '../../../styled/dropzone/StyledDropzone.js';
import '../../../styled/dropzone/StyledMessage.js';
import '../../../styled/dropzone/StyledIcon.js';
import { useDraggableListContext } from '../../../utils/useDraggableListContext.js';

const Item = forwardRef((props, ref) => {
  const {
    isHorizontal
  } = useDraggableListContext();
  return React__default.createElement(StyledItem, Object.assign({}, props, {
    isHorizontal: isHorizontal,
    ref: ref
  }));
});
Item.displayName = 'DraggableList.Item';

export { Item };
