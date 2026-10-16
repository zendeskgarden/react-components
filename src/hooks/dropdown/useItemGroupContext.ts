/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';

import { ItemGroupContext } from '../../context/dropdown/ItemGroupContext';

export const useItemGroupContext = () => {
  return useContext(ItemGroupContext);
};
