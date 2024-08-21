/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';
import { IUseComboboxReturnValue } from '@zendeskgarden/container-combobox';

export const ComboboxContext = createContext<
  | {
      activeValue: IUseComboboxReturnValue['activeValue'];
      getOptionProps: IUseComboboxReturnValue['getOptionProps'];
      getOptGroupProps: IUseComboboxReturnValue['getOptGroupProps'];
      getTagProps: IUseComboboxReturnValue['getTagProps'];
      isCompact?: boolean;
      removeSelection: IUseComboboxReturnValue['removeSelection'];
    }
  | undefined
>(undefined);

const useComboboxContext = () => {
  const context = useContext(ComboboxContext);

  if (!context) {
    throw new Error('Error: this component must be rendered within a <Combobox>.');
  }

  return context;
};

export default useComboboxContext;
