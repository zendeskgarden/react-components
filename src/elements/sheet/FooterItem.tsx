/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';

import { StyledSheetFooterItem } from '../../../styled';

const SheetFooterItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return <StyledSheetFooterItem ref={ref} {...props} />;
});

SheetFooterItem.displayName = 'Sheet.FooterItem';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const FooterItem = SheetFooterItem;
