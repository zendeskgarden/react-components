/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';

const COMPONENT_ID = 'modals.close';

export const BASE_MULTIPLIERS = {
  top: 2.5,
  side: 6.5,
  size: 10
};

export const StyledClose = styled(IconButton).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: absolute;
  top: ${props => props.theme.space.base * BASE_MULTIPLIERS.top}px;
  ${props => (props.theme.rtl ? 'left' : 'right')}: ${props =>
    `${props.theme.space.base * BASE_MULTIPLIERS.side}px`};

  ${componentStyles};
`;
