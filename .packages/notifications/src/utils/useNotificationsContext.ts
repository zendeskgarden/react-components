/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';

import { Type } from '../types';

export const NotificationsContext = createContext<Type | undefined>(undefined);

export const useNotificationsContext = () => {
  return useContext(NotificationsContext);
};
