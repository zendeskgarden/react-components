/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  IItemProps,
  IItemGroupProps,
  IOptGroupProps,
  IOptionProps
} from '@zendeskgarden/react-dropdowns';
import { BUTTON_TYPE } from './data';

export interface IOption extends Omit<IOptionProps, 'icon'> {
  icon?: boolean;
  meta?: string;
}

export interface IOptGroup extends Omit<IOptGroupProps, 'icon'> {
  icon?: boolean;
  options: IOption[];
}

export interface IItem extends Omit<IItemProps, 'icon'> {
  icon?: boolean;
  meta?: string;
  isSeparator?: boolean;
}

export interface IItemGroup extends Omit<IItemGroupProps, 'icon'> {
  icon?: boolean;
  items: IItem[];
}

export type Options = (IOption | IOptGroup)[];

export type Items = (IItem | IItemGroup)[];

export type ButtonType = (typeof BUTTON_TYPE)[number];
