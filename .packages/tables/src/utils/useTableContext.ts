/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';

import { ITableProps } from '../types';

interface ITableContext {
  size: NonNullable<ITableProps['size']>;
  isReadOnly: NonNullable<ITableProps['isReadOnly']>;
}

export const TableContext = React.createContext<ITableContext>({
  size: 'medium',
  isReadOnly: false
});

export const useTableContext = () => {
  return useContext(TableContext);
};
