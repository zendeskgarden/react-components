/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';

import { StyledSheetCloseButton } from '../../../styled';

import { useSheetContext } from '../../../utils/useSheetContext';

export const SheetCloseButton = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    const { getCloseButtonProps } = useSheetContext();

    return (
      <StyledSheetCloseButton ref={ref} {...getCloseButtonProps(props)}>
        <XStrokeIcon />
      </StyledSheetCloseButton>
    );
  }
);

SheetCloseButton.displayName = 'SheetCloseButton';
