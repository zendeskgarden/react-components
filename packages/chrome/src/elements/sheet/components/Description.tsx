/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledSheetDescription } from '../../../styled';

export const SheetDescription = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return <StyledSheetDescription ref={ref} {...props} />;
  }
);

SheetDescription.displayName = 'SheetDescription';
