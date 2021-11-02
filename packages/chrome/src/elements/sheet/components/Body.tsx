/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledSheetBody } from '../../../styled';

export const SheetBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return <StyledSheetBody tabIndex={0} ref={ref} {...(props as any)} />;
  }
);

SheetBody.displayName = 'SheetBody';
