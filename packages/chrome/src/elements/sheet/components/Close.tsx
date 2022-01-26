/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes, useEffect } from 'react';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';

import { StyledSheetClose } from '../../../styled';
import { useSheetContext } from '../../../utils/useSheetContext';

export const SheetClose = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { setCloseButtonPresent } = useSheetContext();

    useEffect(() => {
      setCloseButtonPresent(true);

      return () => setCloseButtonPresent(false);
    }, [setCloseButtonPresent]);

    return (
      <StyledSheetClose aria-label="Close Sheet" ref={ref} {...props}>
        <XStrokeIcon />
      </StyledSheetClose>
    );
  }
);

SheetClose.displayName = 'Sheet.Close';
