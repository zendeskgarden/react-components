/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { withTheme as styledWithTheme } from 'styled-components';

/** @component */
export default function withTheme(WrappedComponent) {
  return styledWithTheme(WrappedComponent);
}
