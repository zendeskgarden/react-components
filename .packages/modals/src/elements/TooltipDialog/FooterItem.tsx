/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';

import { StyledTooltipDialogFooterItem } from '../../styled';

const FooterItemComponent = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  (props, ref) => <StyledTooltipDialogFooterItem ref={ref} {...props} />
);

FooterItemComponent.displayName = 'TooltipDialog.FooterItem';

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const FooterItem = FooterItemComponent;
