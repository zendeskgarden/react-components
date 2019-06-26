/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { withTheme as styledWithTheme } from 'styled-components';
import { default as theme } from '../theme';

/** @component */
export default function withTheme(WrappedComponent) {
  if (WrappedComponent.defaultProps === undefined) {
    WrappedComponent.defaultProps = { theme };
  } else if (WrappedComponent.defaultProps.theme === undefined) {
    WrappedComponent.defaultProps.theme = theme;
  }

  return styledWithTheme(WrappedComponent);
}
