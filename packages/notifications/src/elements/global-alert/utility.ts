/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';

import { TYPE, IGlobalAlertProps } from '../../types';

export type GlobalAlertContextProps = Pick<IGlobalAlertProps, 'type'>;

export const GlobalAlertContext = createContext<GlobalAlertContextProps>({ type: TYPE[3] });

export const useGlobalAlertContext = () => useContext(GlobalAlertContext);
