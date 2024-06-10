/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import OverflowStrokeIcon from '@zendeskgarden/svg-icons/src/16/overflow-vertical-stroke.svg';
import { StyledOverflowButton } from '../styled';
import { useTableContext } from '../utils/useTableContext';

/**
 * @deprecated use `Table.OverflowButton` instead
 *
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const OverflowButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { size } = useTableContext();

  return (
    <StyledOverflowButton type="button" $size={size} ref={ref} {...props} focusInset>
      <OverflowStrokeIcon />
    </StyledOverflowButton>
  );
});

OverflowButton.displayName = 'OverflowButton';
