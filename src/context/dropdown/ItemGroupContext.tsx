/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { ISelectedItem } from '@zendeskgarden/container-menu';
import { createContext } from 'react';

export const ItemGroupContext = createContext<{ type?: ISelectedItem['type'] }>({});

export const ItemGroupProvider = ItemGroupContext.Provider;
