/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ButtonHTMLAttributes, forwardRef } from 'react';
import OverflowStrokeIcon from 'svg-icons-legacy/src/16/overflow-vertical-stroke.svg';

import { useTableContext } from '../../hooks/table/useTableContext';
import { StyledOverflowButton } from '../../views/table/StyledOverflowButton';
import { COMPONENT_IDS } from '../utils';

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
    <StyledOverflowButton
      type="button"
      $size={size}
      ref={ref}
      {...props}
      data-garden-id={COMPONENT_IDS['tables.overflow_button']}
      data-garden-version={PACKAGE_VERSION}
      focusInset
    >
      <OverflowStrokeIcon />
    </StyledOverflowButton>
  );
});

OverflowButton.displayName = 'Table.OverflowButton';
