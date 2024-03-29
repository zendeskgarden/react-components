/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';

export type Hue = 'successHue' | 'warningHue' | 'dangerHue' | 'neutralHue';

export const NotificationsContext = createContext<Hue | undefined>(undefined);

export const useNotificationsContext = () => {
  return useContext(NotificationsContext);
};
