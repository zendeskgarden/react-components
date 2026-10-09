/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext } from 'react';

import type { IOrderedListContext } from '../../types/context';

export const OrderedListContext = createContext<IOrderedListContext | undefined>(undefined);

export const OrderedListProvider = OrderedListContext.Provider;
