/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';

/** Whether a header cell sits directly in a `Table.HeaderRow` */
export const HeaderRowContext = React.createContext(false);

export const useHeaderRowContext = () => {
  return useContext(HeaderRowContext);
};
