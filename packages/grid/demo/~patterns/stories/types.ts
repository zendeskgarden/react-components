/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ISplitterProps } from '@zendeskgarden/react-grid';

interface IPanes {
  name: string;
  content: string;
  splitters: ISplitterProps[];
}

export interface IColumns {
  name: string;
  panes: IPanes[];
}
