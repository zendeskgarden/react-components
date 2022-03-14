/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledClose, baseMultipliers as styledCloseBaseMultipliers } from './StyledClose';

const COMPONENT_ID = 'modals.drawer_modal.close';

export const baseMultipliers = {
  top: 3.5,
  size: 8,
  side: styledCloseBaseMultipliers.side
};

export const StyledDrawerModalClose = styled(StyledClose).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  top: ${props => props.theme.space.base * baseMultipliers.top}px;
  width: ${props => props.theme.space.base * baseMultipliers.size}px;
  height: ${props => props.theme.space.base * baseMultipliers.size}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDrawerModalClose.defaultProps = {
  theme: DEFAULT_THEME
};
