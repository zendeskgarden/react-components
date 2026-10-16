/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';

import { TableContext } from '../../context/table/TableContext';

export const useTableContext = () => {
  return useContext(TableContext);
};
