/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext } from 'react';

import type { ITilesProps } from '../../types/elements';

export const TilesContext = createContext<
  Pick<ITilesProps, 'value' | 'onChange' | 'name' | 'isCentered'> | undefined
>(undefined);

export const TilesProvider = TilesContext.Provider;
