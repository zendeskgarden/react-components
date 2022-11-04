/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ThemeProps, DefaultTheme } from 'styled-components';

export function getStartingDirection(
  props: ThemeProps<DefaultTheme>,
  prefix?: string,
  value?: string
) {
  let startDirection = props.theme.rtl ? 'right' : 'left';

  if (prefix) {
    startDirection = [prefix, startDirection].join('-');
  }

  if (value) {
    return [startDirection, value].join(': ');
  }

  return startDirection;
}
