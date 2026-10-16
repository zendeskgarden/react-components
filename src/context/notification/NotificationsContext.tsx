/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext } from 'react';

import type { Type } from '../../types/elements';

export const NotificationsContext = createContext<Type | undefined>(undefined);

export const NotificationsProvider = NotificationsContext.Provider;
