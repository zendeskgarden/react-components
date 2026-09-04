/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useCallback, useMemo } from 'react';
import { useId } from '@zendeskgarden/container-utilities';

interface IUseDatePickerOptions {
  idPrefix?: string;
  isOpen: boolean;
}

export interface IUseDatePickerReturnValue {
  menuId: string;
  getInputProps: (props?: Record<string, unknown>) => Record<string, unknown>;
}

export function useDatePicker({
  idPrefix,
  isOpen
}: IUseDatePickerOptions): IUseDatePickerReturnValue {
  const prefix = useId(idPrefix);
  const menuId = `${prefix}--menu`;

  const getInputProps = useCallback(
    (props: Record<string, unknown> = {}) => ({
      role: 'combobox',
      'aria-haspopup': 'dialog',
      'aria-autocomplete': 'none',
      'aria-expanded': isOpen,
      'aria-controls': menuId,
      ...props
    }),
    [isOpen, menuId]
  );

  return useMemo(() => ({ menuId, getInputProps }), [menuId, getInputProps]);
}
