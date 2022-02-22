/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IFileProps } from '@zendeskgarden/react-forms';

export interface IFileListItem {
  text: string;
  type?: IFileProps['type'];
  remove?: 'close' | 'delete';
  value?: number;
}

export interface IInputGroupItem {
  text: string;
  isButton: boolean;
}

export interface ITile {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}
