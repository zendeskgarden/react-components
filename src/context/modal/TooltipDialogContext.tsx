/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext } from 'react';

import type { ITooltipDialogContext } from '../../types/context';

export const TooltipDialogContext = createContext<ITooltipDialogContext | undefined>(undefined);

export const TooltipDialogProvider = TooltipDialogContext.Provider;
