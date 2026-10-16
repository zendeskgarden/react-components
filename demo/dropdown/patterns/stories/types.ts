/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IItemProps, IOptGroupProps, IOptionProps } from '@zendeskgarden/react-dropdowns';

export interface IItem extends IItemProps {
  isSeparator?: boolean;
}

export interface IOptGroup extends IOptGroupProps {
  options: IOptionProps[];
}

export type Options = (IOptionProps | IOptGroup)[];
