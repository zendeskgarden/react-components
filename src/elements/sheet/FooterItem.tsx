/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { StyledSheetFooterItem } from '../../views/sheet/StyledSheetFooterItem';
import { COMPONENT_IDS } from '../utils';

const SheetFooterItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <StyledSheetFooterItem
      ref={ref}
      {...props}
      data-garden-id={COMPONENT_IDS['chrome.sheet_footer_item']}
      data-garden-version={PACKAGE_VERSION}
    />
  );
});

SheetFooterItem.displayName = 'Sheet.FooterItem';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const FooterItem = SheetFooterItem;
