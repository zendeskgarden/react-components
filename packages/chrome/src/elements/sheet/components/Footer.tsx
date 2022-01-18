/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledSheetFooter } from '../../../styled';

export interface ISheetFooterProps extends HTMLAttributes<HTMLElement> {
  /** Sets the footer padding to half the standard and centers the elements */
  isCompact?: boolean;
}

const SheetFooter = forwardRef<HTMLElement, ISheetFooterProps>((props, ref) => {
  return <StyledSheetFooter ref={ref} {...props} />;
});

SheetFooter.displayName = 'Sheet.Footer';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Footer = SheetFooter;
