/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';

interface IInputGroupContext {
  isCompact?: boolean;
}

export const InputGroupContext = createContext<IInputGroupContext | undefined>(undefined);

/**
 * Retrieve InputGroup component context
 */
export const useInputGroupContext = () => {
  return useContext(InputGroupContext);
};
