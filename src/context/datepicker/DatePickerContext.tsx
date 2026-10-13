/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext } from 'react';

import type { IDatePickerContext } from '../../types/context';

export const DatePickerContext = createContext<IDatePickerContext | undefined>(undefined);

export const DatePickerProvider = DatePickerContext.Provider;
