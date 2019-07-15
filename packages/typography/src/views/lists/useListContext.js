/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';
import { ListContext } from './List';

/**
 * Retrieve List component context
 */
const useListContext = () => {
  const listContext = useContext(ListContext);

  if (!listContext) {
    throw new Error('This component must be rendered within a `List` component.');
  }

  return listContext;
};

export default useListContext;
