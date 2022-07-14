/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IItemProps, IMessageProps } from '@zendeskgarden/react-dropdowns';

export type MENU_SEPARATOR = '---';

export interface ICommonArgs {
  label?: string;
  isLabelRegular?: boolean;
  isLabelHidden?: boolean;
  hasHint?: boolean;
  hint?: string;
  hasMessage?: boolean;
  message?: string;
  validation?: IMessageProps['validation'];
  validationLabel?: IMessageProps['validationLabel'];
}

export interface IMenuItem {
  text: string;
  value: IItemProps['value'];
  type?: 'add' | 'header' | 'next' | 'previous';
  disabled?: IItemProps['disabled'];
  hasIcon?: boolean;
  meta?: string;
}

export type ITEM = IMenuItem | MENU_SEPARATOR;
