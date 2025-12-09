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
import { StyledTooltipDialogFooterItem } from '../../styled/StyledTooltipDialogFooterItem.js';
import '../../styled/StyledTooltipDialogClose.js';
import '../../styled/StyledDrawer.js';
import '../../styled/StyledDrawerHeader.js';
import '../../styled/StyledDrawerClose.js';
import '../../styled/StyledDrawerBody.js';
import '../../styled/StyledDrawerFooter.js';
import '../../styled/StyledDrawerFooterItem.js';

const FooterItemComponent = forwardRef((props, ref) => React__default.createElement(StyledTooltipDialogFooterItem, Object.assign({
  ref: ref
}, props)));
FooterItemComponent.displayName = 'TooltipDialog.FooterItem';
const FooterItem = FooterItemComponent;

export { FooterItem };
