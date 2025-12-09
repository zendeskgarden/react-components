/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import SvgGrip from '../../../node_modules/@zendeskgarden/svg-icons/src/12/grip.svg.js';
import '../../../styled/draggable/StyledDraggable.js';
import '../../../styled/draggable/StyledContent.js';
import { StyledGrip } from '../../../styled/draggable/StyledGrip.js';
import '../../../styled/draggable-list/StyledDraggableList.js';
import '../../../styled/draggable-list/StyledDropIndicator.js';
import '../../../styled/draggable-list/StyledItem.js';
import '../../../styled/dropzone/StyledDropzone.js';
import '../../../styled/dropzone/StyledMessage.js';
import '../../../styled/dropzone/StyledIcon.js';

const Grip = forwardRef((props, ref) => React__default.createElement(StyledGrip, Object.assign({}, props, {
  ref: ref
}), React__default.createElement(SvgGrip, null)));
Grip.displayName = 'Draggable.Grip';

export { Grip };
