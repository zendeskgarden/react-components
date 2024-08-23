/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledClose, BASE_MULTIPLIERS as styledCloseBaseMultipliers } from './StyledClose';

const COMPONENT_ID = 'modals.drawer_modal.close';

export const BASE_MULTIPLIERS = {
  top: styledCloseBaseMultipliers.top,
  side: 2,
  size: styledCloseBaseMultipliers.size
};

export const StyledDrawerClose = styled(StyledClose).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => (props.theme.rtl ? 'left' : 'right')}: ${props =>
    `${props.theme.space.base * BASE_MULTIPLIERS.side}px`};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
