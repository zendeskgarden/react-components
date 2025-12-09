/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useEffect } from 'react';
import '../../../styled/draggable/StyledDraggable.js';
import '../../../styled/draggable/StyledContent.js';
import '../../../styled/draggable/StyledGrip.js';
import '../../../styled/draggable-list/StyledDraggableList.js';
import '../../../styled/draggable-list/StyledDropIndicator.js';
import '../../../styled/draggable-list/StyledItem.js';
import '../../../styled/dropzone/StyledDropzone.js';
import { StyledMessage } from '../../../styled/dropzone/StyledMessage.js';
import '../../../styled/dropzone/StyledIcon.js';
import { useDropzoneContext } from '../../../utils/useDropzoneContext.js';

const Message = forwardRef((props, ref) => {
  const {
    setHasMessage,
    hasMessage
  } = useDropzoneContext();
  useEffect(() => {
    if (setHasMessage && !hasMessage) {
      setHasMessage(true);
    }
    return () => {
      if (setHasMessage && hasMessage) {
        setHasMessage(false);
      }
    };
  }, [setHasMessage, hasMessage]);
  return React__default.createElement(StyledMessage, Object.assign({}, props, {
    ref: ref
  }));
});
Message.displayName = 'Dropzone.Message';

export { Message };
