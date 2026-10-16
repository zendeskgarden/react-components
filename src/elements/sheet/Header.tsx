/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { useSheetContext } from '../../hooks/sheet/useSheetContext';
import { StyledSheetHeader } from '../../views/sheet/StyledSheetHeader';
import { COMPONENT_IDS } from '../utils';

const SheetHeader = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => {
  const { isCloseButtonPresent } = useSheetContext();

  return (
    <StyledSheetHeader
      ref={ref}
      $isCloseButtonPresent={isCloseButtonPresent}
      {...props}
      data-garden-id={COMPONENT_IDS['chrome.sheet_header']}
      data-garden-version={PACKAGE_VERSION}
    />
  );
});

SheetHeader.displayName = 'Sheet.Header';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Header = SheetHeader;
