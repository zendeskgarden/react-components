/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';
import { VALIDATION_HUE } from './types';

export const NotificationsContext = createContext<VALIDATION_HUE | undefined>(undefined);

export const useNotificationsContext = () => {
  return useContext(NotificationsContext);
};
