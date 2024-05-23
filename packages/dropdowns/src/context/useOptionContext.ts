/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';
import { OptionType } from '../types';

export const OptionContext = createContext<{ isDisabled?: boolean; type?: OptionType } | undefined>(
  undefined
);

const useOptionContext = () => {
  const context = useContext(OptionContext);

  if (!context) {
    throw new Error('Error: this component must be rendered within an <Option>.');
  }

  return context;
};

export default useOptionContext;
