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
import '../../../styled/dropzone/StyledMessage.js';
import { StyledIcon } from '../../../styled/dropzone/StyledIcon.js';
import { useDropzoneContext } from '../../../utils/useDropzoneContext.js';

const Icon = forwardRef((props, ref) => {
  const {
    hasIcon,
    setHasIcon,
    hasMessage,
    isVertical
  } = useDropzoneContext();
  useEffect(() => {
    if (setHasIcon && !hasIcon) {
      setHasIcon(true);
    }
    return () => {
      if (setHasIcon && hasIcon) {
        setHasIcon(false);
      }
    };
  }, [setHasIcon, hasIcon]);
  return React__default.createElement(StyledIcon, Object.assign({
    "aria-hidden": "true"
  }, props, {
    hasMessage: hasMessage,
    isVertical: isVertical,
    ref: ref
  }));
});
Icon.displayName = 'Dropzone.Icon';

export { Icon };
