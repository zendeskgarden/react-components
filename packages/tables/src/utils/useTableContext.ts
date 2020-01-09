/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';
import { SIZE } from '../styled/StyledTable';

interface ITableContext {
  size: SIZE;
}

export const TableContext = React.createContext<ITableContext>({ size: 'medium' });

export const useTableContext = () => {
  return useContext(TableContext);
};
