/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { StyledDrawerFooter } from '../../views/modal/StyledDrawerFooter';
import { COMPONENT_IDS } from '../utils';

const FooterComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <StyledDrawerFooter
    ref={ref}
    {...props}
    data-garden-id={COMPONENT_IDS['modals.drawer_modal.footer']}
    data-garden-version={PACKAGE_VERSION}
  />
));

FooterComponent.displayName = 'Drawer.Footer';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Footer = FooterComponent;
