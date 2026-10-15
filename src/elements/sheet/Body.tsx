/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { StyledSheetBody } from '../../views/sheet/StyledSheetBody';
import { COMPONENT_IDS } from '../utils';

const SheetBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <StyledSheetBody
      ref={ref}
      {...props}
      data-garden-id={COMPONENT_IDS['chrome.sheet_body']}
      data-garden-version={PACKAGE_VERSION}
    />
  );
});

SheetBody.displayName = 'Sheet.Body';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Body = SheetBody;
