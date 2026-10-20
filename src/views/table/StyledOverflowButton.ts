/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math } from 'polished';
import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { ITableProps } from '../../types/elements';
import type { IStyledBaseProps } from '../../types/views';
import { StyledIconButton } from '../button/StyledIconButton';
import { getRowHeight } from './style-utils';

interface IStyledOverflowButtonProps {
  /** Table size, which sets the row height. `$size` stays the button size. */
  $tableSize?: ITableProps['size'];
}

const OVERFLOW_BUTTON_SIZE = '2em';

const getHalfRowHeight = ({ $tableSize, theme }: IStyledOverflowButtonProps & IStyledBaseProps) =>
  math(`${getRowHeight({ $size: $tableSize, theme })} / 2`);

/**
 * 1. Overrides IconButton sizing
 */
export const StyledOverflowButton = styled(StyledIconButton)<IStyledOverflowButtonProps>`
  margin-top: calc(${getHalfRowHeight} - 1em);
  width: 100%; /* [1] */
  min-width: unset; /* [1] */
  height: ${OVERFLOW_BUTTON_SIZE}; /* [1] */
  font-size: inherit;

  ${componentStyles};
`;
