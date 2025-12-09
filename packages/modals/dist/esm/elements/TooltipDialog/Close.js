/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import '../../styled/StyledBackdrop.js';
import '../../styled/StyledBody.js';
import '../../styled/StyledClose.js';
import '../../styled/StyledFooter.js';
import '../../styled/StyledFooterItem.js';
import '../../styled/StyledHeader.js';
import '../../styled/StyledDangerIcon.js';
import '../../styled/StyledModal.js';
import '../../styled/StyledTooltipDialogBackdrop.js';
import '../../styled/StyledTooltipWrapper.js';
import '../../styled/StyledTooltipDialog.js';
import '../../styled/StyledTooltipDialogTitle.js';
import '../../styled/StyledTooltipDialogBody.js';
import '../../styled/StyledTooltipDialogFooter.js';
import '../../styled/StyledTooltipDialogFooterItem.js';
import { StyledTooltipDialogClose } from '../../styled/StyledTooltipDialogClose.js';
import '../../styled/StyledDrawer.js';
import '../../styled/StyledDrawerHeader.js';
import '../../styled/StyledDrawerClose.js';
import '../../styled/StyledDrawerBody.js';
import '../../styled/StyledDrawerFooter.js';
import '../../styled/StyledDrawerFooterItem.js';
import { useText } from '@zendeskgarden/react-theming';
import { useTooltipDialogContext } from '../../utils/useTooltipDialogContext.js';
import SvgXStroke from '../../packages/modals/node_modules/@zendeskgarden/svg-icons/src/16/x-stroke.svg.js';

const CloseComponent$1 = forwardRef((props, ref) => {
  const {
    getCloseProps
  } = useTooltipDialogContext();
  const ariaLabel = useText(CloseComponent$1, props, 'aria-label', 'Close tooltip', props['aria-describedby'] === undefined );
  return React__default.createElement(StyledTooltipDialogClose, Object.assign({}, getCloseProps({
    ...props,
    'aria-label': ariaLabel
  }), {
    ref: ref,
    size: "small"
  }), React__default.createElement(SvgXStroke, null));
});
CloseComponent$1.displayName = 'TooltipDialog.Close';
const Close$1 = CloseComponent$1;

export { Close$1 as Close };
