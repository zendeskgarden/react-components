/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { StyledTooltipDialogFooter } from '../../views/modal/StyledTooltipDialogFooter';
import { COMPONENT_IDS } from '../utils';

const FooterComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <StyledTooltipDialogFooter
    ref={ref}
    {...props}
    data-garden-id={COMPONENT_IDS['modals.tooltip_dialog.footer']}
    data-garden-version={PACKAGE_VERSION}
  />
));

FooterComponent.displayName = 'TooltipDialog.Footer';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Footer = FooterComponent;
