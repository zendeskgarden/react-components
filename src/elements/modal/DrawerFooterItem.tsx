/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { StyledDrawerFooterItem } from '../../views/modal/StyledDrawerFooterItem';
import { COMPONENT_IDS } from '../utils';

const FooterItemComponent = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  (props, ref) => (
    <StyledDrawerFooterItem
      ref={ref}
      {...props}
      data-garden-id={COMPONENT_IDS['modals.drawer_modal.footer_item']}
      data-garden-version={PACKAGE_VERSION}
    />
  )
);

FooterItemComponent.displayName = 'Drawer.FooterItem';

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const FooterItem = FooterItemComponent;
