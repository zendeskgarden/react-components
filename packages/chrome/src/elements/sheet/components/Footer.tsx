/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import { ISheetFooterProps } from '../../../types';
import { StyledSheetFooter } from '../../../styled';

const SheetFooter = forwardRef<HTMLElement, ISheetFooterProps>(({ isCompact, ...other }, ref) => {
  return <StyledSheetFooter ref={ref} $isCompact={isCompact} {...other} />;
});

SheetFooter.displayName = 'Sheet.Footer';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Footer = SheetFooter;
