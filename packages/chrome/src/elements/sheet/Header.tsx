/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';
import { StyledSheetHeader } from '../../styled';

export const SheetHeader = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(({ children, ...props }, ref) => {
  return (
    <StyledSheetHeader ref={ref} {...props}>
      {children}
    </StyledSheetHeader>
  );
});
