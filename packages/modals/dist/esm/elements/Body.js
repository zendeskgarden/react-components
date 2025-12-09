/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import '../styled/StyledBackdrop.js';
import { StyledBody } from '../styled/StyledBody.js';
import '../styled/StyledClose.js';
import '../styled/StyledFooter.js';
import '../styled/StyledFooterItem.js';
import '../styled/StyledHeader.js';
import '../styled/StyledDangerIcon.js';
import '../styled/StyledModal.js';
import '../styled/StyledTooltipDialogBackdrop.js';
import '../styled/StyledTooltipWrapper.js';
import '../styled/StyledTooltipDialog.js';
import '../styled/StyledTooltipDialogTitle.js';
import '../styled/StyledTooltipDialogBody.js';
import '../styled/StyledTooltipDialogFooter.js';
import '../styled/StyledTooltipDialogFooterItem.js';
import '../styled/StyledTooltipDialogClose.js';
import '../styled/StyledDrawer.js';
import '../styled/StyledDrawerHeader.js';
import '../styled/StyledDrawerClose.js';
import '../styled/StyledDrawerBody.js';
import '../styled/StyledDrawerFooter.js';
import '../styled/StyledDrawerFooterItem.js';
import { useModalContext } from '../utils/useModalContext.js';

const Body = forwardRef((props, ref) => {
  const {
    getContentProps
  } = useModalContext();
  return React__default.createElement(StyledBody, Object.assign({}, getContentProps(props), {
    ref: ref
  }));
});
Body.displayName = 'Modal.Body';

export { Body };
