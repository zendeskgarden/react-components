/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext, createContext } from 'react';

import { IAvatarProps } from '../types';

export interface IAvatarContext
  extends Pick<IAvatarProps, 'backgroundColor' | 'foregroundColor' | 'surfaceColor' | 'size'> {
  status?: IAvatarProps['status'] | 'active';
}

export const AvatarContext = createContext<IAvatarContext>({});

export const useAvatarContext = () => {
  return useContext<IAvatarContext>(AvatarContext as any);
};
