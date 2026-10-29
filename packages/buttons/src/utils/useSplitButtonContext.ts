/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';
import { ISplitButtonProps } from '../types';

export interface ISplitButtonContext extends Pick<
  ISplitButtonProps,
  'isBasic' | 'isDanger' | 'isNeutral' | 'isPill' | 'isPrimary' | 'size'
> {
  focusInset: boolean;
}

export const SplitButtonContext = createContext<ISplitButtonContext | undefined>(undefined);

export const useSplitButtonContext = () => {
  return useContext(SplitButtonContext);
};
