/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useContext } from 'react';

const TableContext = React__default.createContext({
  size: 'medium',
  isReadOnly: false
});
const useTableContext = () => {
  return useContext(TableContext);
};

export { TableContext, useTableContext };
