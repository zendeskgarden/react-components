/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { useSheetContext } from '../../hooks/sheet/useSheetContext';
import { StyledSheetDescription } from '../../views/sheet/StyledSheetDescription';
import { COMPONENT_IDS } from '../utils';

const SheetDescription = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ id, ...props }, ref) => {
    const { descriptionId } = useSheetContext();

    return (
      <StyledSheetDescription
        id={id || descriptionId}
        ref={ref}
        {...props}
        data-garden-id={COMPONENT_IDS['chrome.sheet_description']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }
);

SheetDescription.displayName = 'Sheet.Description';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Description = SheetDescription;
