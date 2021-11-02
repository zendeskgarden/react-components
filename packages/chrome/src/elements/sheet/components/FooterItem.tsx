/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledSheetFooterItem } from '../../../styled';

export const SheetFooterItem = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return <StyledSheetFooterItem ref={ref} {...(props as any)} />;
  }
);

SheetFooterItem.displayName = 'SheetFooterItem';
