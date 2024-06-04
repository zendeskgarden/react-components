/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { getRowHeight } from './style-utils';
import { IconButton } from '@zendeskgarden/react-buttons';

const COMPONENT_ID = 'tables.overflow_button';

const OVERFLOW_BUTTON_SIZE = '2em';

/**
 * 1. Overrides IconButton sizing
 */
export const StyledOverflowButton = styled(IconButton).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  z-index: 0;
  margin-top: calc(${props => math(`${getRowHeight(props)} / 2`)} - 1em);
  min-width: unset; /* [1] */
  height: ${OVERFLOW_BUTTON_SIZE}; /* [1] */
  width: 100%; /* [1] */
  font-size: inherit;

  &:active {
    z-index: 1;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledOverflowButton.defaultProps = {
  theme: DEFAULT_THEME
};
