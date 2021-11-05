/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { SM } from '@zendeskgarden/react-typography';

import { useSheetContext } from '../../../utils/useSheetContext';

export const SheetDescription = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ id, ...props }, ref) => {
    const { idPrefix } = useSheetContext();
    const descriptionId = `${idPrefix}--description`;

    return <SM id={id || descriptionId} ref={ref} {...props} />;
  }
);

SheetDescription.displayName = 'SheetDescription';
