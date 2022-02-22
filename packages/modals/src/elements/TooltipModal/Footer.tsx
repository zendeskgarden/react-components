/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import { StyledTooltipModalFooter } from '../../styled';

const FooterComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <StyledTooltipModalFooter ref={ref} {...props} />
));

FooterComponent.displayName = 'TooltipModal.Footer';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Footer = FooterComponent;
