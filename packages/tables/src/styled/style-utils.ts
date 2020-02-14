/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { SIZE } from './StyledTable';
import { ThemeProps, DefaultTheme } from 'styled-components';

export const getRowHeight = (props: { size: SIZE } & ThemeProps<DefaultTheme>) => {
  if (props.size === 'large') {
    return `${props.theme.space.base * 16}px`;
  } else if (props.size === 'small') {
    return `${props.theme.space.base * 8}px`;
  }

  return `${props.theme.space.base * 10}px`;
};
