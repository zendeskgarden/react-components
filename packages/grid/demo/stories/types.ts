/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IColProps, IRowProps, ISplitterProps } from '@zendeskgarden/react-grid';

export interface IGridRow extends IRowProps {
  cols: IColProps[];
}

export interface ISplitterPane {
  name: string;
  splitters: ISplitterProps[];
}
