/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { IUseComboboxReturnValue } from '@zendeskgarden/container-combobox';
import { createContext } from 'react';

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

export const ComboboxProvider = ComboboxContext.Provider;
