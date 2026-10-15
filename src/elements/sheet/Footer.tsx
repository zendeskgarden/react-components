/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef } from 'react';

import { ISheetFooterProps } from '../../types/elements';
import { StyledSheetFooter } from '../../views/sheet/StyledSheetFooter';
import { COMPONENT_IDS } from '../utils';

const SheetFooter = forwardRef<HTMLElement, ISheetFooterProps>(({ isCompact, ...other }, ref) => {
  return (
    <StyledSheetFooter
      ref={ref}
      $isCompact={isCompact}
      {...other}
      data-garden-id={COMPONENT_IDS['chrome.sheet_footer']}
      data-garden-version={PACKAGE_VERSION}
    />
  );
});

SheetFooter.displayName = 'Sheet.Footer';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Footer = SheetFooter;
