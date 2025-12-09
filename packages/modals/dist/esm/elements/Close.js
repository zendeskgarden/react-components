/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useEffect } from 'react';
import '../styled/StyledBackdrop.js';
import '../styled/StyledBody.js';
import { StyledClose } from '../styled/StyledClose.js';
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
import { useText } from '@zendeskgarden/react-theming';
import { useModalContext } from '../utils/useModalContext.js';
import SvgXStroke from '../node_modules/@zendeskgarden/svg-icons/src/16/x-stroke.svg.js';

const Close = forwardRef((props, ref) => {
  const {
    getCloseProps,
    setIsCloseButtonPresent
  } = useModalContext();
  useEffect(() => {
    setIsCloseButtonPresent(true);
    return () => setIsCloseButtonPresent(false);
  });
  const ariaLabel = useText(Close, props, 'aria-label', 'Close modal', props['aria-describedby'] === undefined );
  return React__default.createElement(StyledClose, Object.assign({}, getCloseProps({
    ...props,
    'aria-label': ariaLabel
  }), {
    ref: ref
  }), React__default.createElement(SvgXStroke, null));
});
Close.displayName = 'Modal.Close';

export { Close };
