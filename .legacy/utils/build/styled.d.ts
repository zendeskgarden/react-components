/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import 'styled-components';
import type { ReactNode, Context } from 'react';

import type { IGardenTheme } from '../../packages/theming/src/index';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends IGardenTheme {}

  export interface ThemeProps<T> {
    theme: T;
  }

  export const ThemeContext: Context<DefaultTheme>;
  export interface ThemeProviderProps<T extends object, U extends object = T> {
    children?: ReactNode | undefined;
    theme: T | ((theme: U) => T);
  }
}
