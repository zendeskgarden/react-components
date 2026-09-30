/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ThHTMLAttributes, useContext } from 'react';

interface IRowContext {
  /** The scope a header cell in this row applies when none is given */
  headerCellScope?: ThHTMLAttributes<HTMLTableCellElement>['scope'];
}

export const RowContext = React.createContext<IRowContext>({});

export const useRowContext = () => {
  return useContext(RowContext);
};
