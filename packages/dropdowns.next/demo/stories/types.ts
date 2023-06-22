/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IOptGroupProps, IOptionProps } from '@zendeskgarden/react-dropdowns.next';

export interface IOption extends Omit<IOptionProps, 'icon'> {
  icon?: boolean;
  meta?: string;
}

export interface IOptGroup extends Omit<IOptGroupProps, 'icon'> {
  icon?: boolean;
  options: IOption[];
}

export type Options = (IOption | IOptGroup)[];
