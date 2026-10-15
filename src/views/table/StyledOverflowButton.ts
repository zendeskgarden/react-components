/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IconButton } from '@zendeskgarden/react-buttons';
import { math } from 'polished';
import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { ITableProps } from '../../types/elements';
import { getRowHeight } from './style-utils';

interface IStyledOverflowButtonProps {
  $size?: ITableProps['size'];
}

const OVERFLOW_BUTTON_SIZE = '2em';

/**
 * 1. Overrides IconButton sizing
 */
export const StyledOverflowButton = styled(IconButton)<IStyledOverflowButtonProps>`
  margin-top: calc(${props => math(`${getRowHeight(props)} / 2`)} - 1em);
  width: 100%; /* [1] */
  min-width: unset; /* [1] */
  height: ${OVERFLOW_BUTTON_SIZE}; /* [1] */
  font-size: inherit;

  ${componentStyles};
`;
