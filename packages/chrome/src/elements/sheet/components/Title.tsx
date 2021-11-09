/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';

import { StyledSheetTitle } from '../../../styled';
import { useSheetContext } from '../../../utils/useSheetContext';

export const SheetTitle = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ id, ...props }, ref) => {
    const { idPrefix } = useSheetContext();
    const titleId = `${idPrefix}--title`;

    return <StyledSheetTitle id={id || titleId} ref={ref} {...props} />;
  }
);

SheetTitle.displayName = 'SheetTitle';
