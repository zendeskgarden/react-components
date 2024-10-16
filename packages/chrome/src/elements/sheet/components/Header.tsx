/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';

import { StyledSheetHeader } from '../../../styled';
import { useSheetContext } from '../../../utils/useSheetContext';

const SheetHeader = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => {
  const { isCloseButtonPresent } = useSheetContext();

  return <StyledSheetHeader ref={ref} $isCloseButtonPresent={isCloseButtonPresent} {...props} />;
});

SheetHeader.displayName = 'Sheet.Header';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Header = SheetHeader;
