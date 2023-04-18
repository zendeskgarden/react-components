/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext } from 'react';

export interface IDropzoneContext {
  isVertical?: boolean;
  isDanger?: boolean;
  hasIcon?: boolean;
  setHasIcon?: (hasIcon: boolean) => void;
  hasMessage?: boolean;
  setHasMessage?: (hasMessage: boolean) => void;
}

export const DropzoneContext = createContext<IDropzoneContext | undefined>(undefined);

export const useDropzoneContext = () => {
  const context = useContext(DropzoneContext);

  if (context === undefined) {
    throw new Error('This component must be rendered within a Dropzone component');
  }

  return context;
};
