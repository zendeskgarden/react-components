/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext } from 'react';

import type { IFieldContext } from '../../types/context';

export const FieldContext = createContext<IFieldContext | undefined>(undefined);

export const FieldProvider = FieldContext.Provider;
