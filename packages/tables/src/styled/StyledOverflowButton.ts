/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { getRowHeight } from './style-utils';
import { IconButton } from '@zendeskgarden/react-buttons';
import { ITableProps } from '../types';

const COMPONENT_ID = 'tables.overflow_button';

interface IStyledOverflowButtonProps {
  $size?: ITableProps['size'];
}

const OVERFLOW_BUTTON_SIZE = '2em';

/**
 * 1. Overrides IconButton sizing
 */
export const StyledOverflowButton = styled(IconButton).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledOverflowButtonProps>`
  margin-top: calc(${props => math(`${getRowHeight(props)} / 2`)} - 1em);
  width: 100%; /* [1] */
  min-width: unset; /* [1] */
  height: ${OVERFLOW_BUTTON_SIZE}; /* [1] */
  font-size: inherit;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
