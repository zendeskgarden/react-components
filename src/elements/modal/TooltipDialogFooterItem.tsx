/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { StyledTooltipDialogFooterItem } from '../../views/modal/StyledTooltipDialogFooterItem';
import { COMPONENT_IDS } from '../utils';

const FooterItemComponent = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  (props, ref) => (
    <StyledTooltipDialogFooterItem
      ref={ref}
      {...props}
      data-garden-id={COMPONENT_IDS['modals.tooltip_dialog.footer_item']}
      data-garden-version={PACKAGE_VERSION}
    />
  )
);

FooterItemComponent.displayName = 'TooltipDialog.FooterItem';

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const FooterItem = FooterItemComponent;
