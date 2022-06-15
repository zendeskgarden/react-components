/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes, forwardRef, useEffect } from 'react';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';

import { StyledSheetClose } from '../../../styled';
import { useSheetContext } from '../../../utils/useSheetContext';

const SheetClose = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { setIsCloseButtonPresent } = useSheetContext();

    useEffect(() => {
      setIsCloseButtonPresent(true);

      return () => setIsCloseButtonPresent(false);
    }, [setIsCloseButtonPresent]);

    return (
      <StyledSheetClose aria-label="Close Sheet" ref={ref} {...props}>
        <XStrokeIcon />
      </StyledSheetClose>
    );
  }
);

SheetClose.displayName = 'Sheet.Close';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Close = SheetClose;
