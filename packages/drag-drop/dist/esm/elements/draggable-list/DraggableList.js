/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useMemo } from 'react';
import { DropIndicator } from './components/DropIndicator.js';
import { Item } from './components/Item.js';
import '../../styled/draggable/StyledDraggable.js';
import '../../styled/draggable/StyledContent.js';
import '../../styled/draggable/StyledGrip.js';
import { StyledDraggableList } from '../../styled/draggable-list/StyledDraggableList.js';
import '../../styled/draggable-list/StyledDropIndicator.js';
import '../../styled/draggable-list/StyledItem.js';
import '../../styled/dropzone/StyledDropzone.js';
import '../../styled/dropzone/StyledMessage.js';
import '../../styled/dropzone/StyledIcon.js';
import { DraggableListContext } from '../../utils/useDraggableListContext.js';

const DraggableListComponent = forwardRef((props, ref) => {
  const value = useMemo(() => ({
    isHorizontal: props.isHorizontal
  }), [props.isHorizontal]);
  return React__default.createElement(DraggableListContext.Provider, {
    value: value
  }, React__default.createElement(StyledDraggableList, Object.assign({}, props, {
    ref: ref
  })));
});
DraggableListComponent.displayName = 'DraggableList';
const DraggableList = DraggableListComponent;
DraggableList.Item = Item;
DraggableList.DropIndicator = DropIndicator;

export { DraggableList };
