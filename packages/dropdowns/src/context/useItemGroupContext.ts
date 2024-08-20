/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';
import { ISelectedItem } from '@zendeskgarden/container-menu';

export const ItemGroupContext = createContext<{ type?: ISelectedItem['type'] }>({});

const useItemGroupContext = () => {
  return useContext(ItemGroupContext);
};

export default useItemGroupContext;
