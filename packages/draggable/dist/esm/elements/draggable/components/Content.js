/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import '../../../styled/draggable/StyledDraggable.js';
import { StyledContent } from '../../../styled/draggable/StyledContent.js';
import '../../../styled/draggable/StyledGrip.js';
import '../../../styled/draggable-list/StyledDraggableList.js';
import '../../../styled/draggable-list/StyledDropIndicator.js';
import '../../../styled/draggable-list/StyledItem.js';
import '../../../styled/dropzone/StyledDropzone.js';
import '../../../styled/dropzone/StyledMessage.js';
import '../../../styled/dropzone/StyledIcon.js';

const Content = forwardRef((props, ref) => React__default.createElement(StyledContent, Object.assign({}, props, {
  ref: ref
})));
Content.displayName = 'Draggable.Content';

export { Content };
