/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import 'styled-components';
import { ITableProps } from '../../types/elements';
import type { WithTheme } from '../../types/views';

export const getRowHeight = (props: WithTheme<{ $size?: ITableProps['size'] }>) => {
  if (props.$size === 'large') {
    return `${props.theme.space.base * 12}px`;
  } else if (props.$size === 'small') {
    return `${props.theme.space.base * 8}px`;
  }

  return `${props.theme.space.base * 10}px`;
};

export const getHeaderRowHeight = (props: WithTheme<{ $size?: ITableProps['size'] }>) => {
  if (props.$size === 'small') {
    return `${props.theme.space.base * 10}px`;
  }

  return `${props.theme.space.base * 12}px`;
};

export const CELL_SELECTOR = ':is(td, th)';

export const getRoundedEndStyles = ({ theme }: WithTheme) => `
  > :first-child {
    border-start-start-radius: ${theme.borderRadii.md};
    border-end-start-radius: ${theme.borderRadii.md};
  }

  > :last-child {
    border-start-end-radius: ${theme.borderRadii.md};
    border-end-end-radius: ${theme.borderRadii.md};
  }
`;
