/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { useSheetContext } from '../../hooks/sheet/useSheetContext';
import { StyledSheetTitle } from '../../views/sheet/StyledSheetTitle';
import { COMPONENT_IDS } from '../utils';

const SheetTitle = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ id, ...props }, ref) => {
    const { titleId } = useSheetContext();

    return (
      <StyledSheetTitle
        id={id || titleId}
        ref={ref}
        {...props}
        data-garden-id={COMPONENT_IDS['chrome.sheet_title']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }
);

SheetTitle.displayName = 'Sheet.Title';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Title = SheetTitle;
