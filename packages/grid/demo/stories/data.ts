/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IColProps } from '@zendeskgarden/react-grid';
import { IGridRow } from './types';

const ROW_COLUMNS_STANDARD: IColProps[] = Array.from({ length: 12 }, (_, index) => ({
  children: index < 9 ? `0${index + 1}` : `${index + 1}`,
  textAlign: 'center'
}));

const ROW_COLUMNS_RESPONSIVE: IColProps[] = Array(12).fill({
  children: 'xl={1} lg={2} md={4} sm={6} xs={12}',
  textAlign: 'center',
  xl: 1,
  lg: 2,
  md: 4,
  sm: 6,
  xs: 12
});

const ROW_COLUMNS_JUSTIFY: IColProps[] = [
  { children: 'size={4}', size: 4, textAlign: 'center' },
  { children: 'size={4}', size: 4, textAlign: 'center' }
];

const ROW_COLUMNS_OFFSET: IColProps[] = [
  { children: 'md={4}', md: 3, textAlign: 'center' },
  { children: 'md={4} offsetMd={4}', md: 3, offsetMd: 6, textAlign: 'center' }
];

export const GRID_ROWS: IGridRow[] = [
  {
    cols: [{ children: 'Col' }]
  },
  {
    cols: ROW_COLUMNS_STANDARD
  },
  {
    cols: ROW_COLUMNS_RESPONSIVE
  },
  {
    cols: ROW_COLUMNS_JUSTIFY
  },
  {
    cols: ROW_COLUMNS_OFFSET
  }
];
