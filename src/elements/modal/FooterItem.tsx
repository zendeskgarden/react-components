/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { StyledFooterItem } from '../../views/modal/StyledFooterItem';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Modal.FooterItem` instead
 *
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const FooterItem = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  (props, ref) => (
    <StyledFooterItem
      ref={ref}
      {...props}
      data-garden-id={COMPONENT_IDS['modals.footer_item']}
      data-garden-version={PACKAGE_VERSION}
    />
  )
);

FooterItem.displayName = 'Modal.FooterItem';
