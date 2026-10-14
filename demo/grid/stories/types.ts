/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IColProps, IGridRowProps, ISplitterProps, ISplitterButtonProps } from '../../../src/index';

export interface IGridRow extends IGridRowProps {
  cols: IColProps[];
}

export interface ISplitterPane {
  content: string;
  splitters: (ISplitterProps & {
    button?: ISplitterButtonProps;
  })[];
}
