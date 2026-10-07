/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import 'styled-components';
import type { ReactNode } from 'react';

import type { IGardenTheme } from '../src/theming/types';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends IGardenTheme {}

  export interface ThemeProps<T> {
    theme: T;
  }

  export interface ThemeProviderProps<T extends object, U extends object = T> {
    children?: ReactNode | undefined;
    theme: T | ((theme: U) => T);
  }
}
