/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledSheetHeader } from '../../../styled';

export const SheetHeader = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => {
  return <StyledSheetHeader ref={ref} {...props} />;
});

SheetHeader.displayName = 'Sheet.Header';
