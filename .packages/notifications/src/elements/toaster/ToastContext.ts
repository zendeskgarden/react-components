/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, Dispatch } from 'react';

import { IToasterState, ToasterReducerAction } from './reducer';

interface IToastContext {
  state: IToasterState;
  dispatch: Dispatch<ToasterReducerAction>;
}

export const ToastContext = createContext<IToastContext | undefined>(undefined);
