/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ThemeProps, DefaultTheme } from 'styled-components';

/** @component */
export default function getDocument({ theme }: Partial<ThemeProps<Partial<DefaultTheme>>> = {}) {
  return (theme && theme.document) || document;
}
