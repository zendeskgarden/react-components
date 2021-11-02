/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { MD } from '@zendeskgarden/react-typography';

import { useSheetContext } from '../../../utils/useSheetContext';

export const SheetTitle = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ id, ...props }, ref) => {
    const { idPrefix } = useSheetContext();
    const titleId = `${idPrefix}--title`;

    return <MD isBold id={id || titleId} ref={ref} {...(props as any)} />;
  }
);

SheetTitle.displayName = 'SheetTitle';
