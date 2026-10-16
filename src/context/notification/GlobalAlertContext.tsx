/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext } from 'react';

import type { GlobalAlertContextProps } from '../../types/context';

export const GlobalAlertContext = createContext<GlobalAlertContextProps>({ type: 'info' });

export const GlobalAlertProvider = GlobalAlertContext.Provider;
