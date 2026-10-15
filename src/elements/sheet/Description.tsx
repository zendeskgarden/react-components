/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';

import { StyledSheetDescription } from '../../../styled';
import { useSheetContext } from '../../../utils/useSheetContext';

const SheetDescription = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ id, ...props }, ref) => {
    const { descriptionId } = useSheetContext();

    return <StyledSheetDescription id={id || descriptionId} ref={ref} {...props} />;
  }
);

SheetDescription.displayName = 'Sheet.Description';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Description = SheetDescription;
