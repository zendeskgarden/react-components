/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledHeader } from './StyledHeader';

const COMPONENT_ID = 'modals.drawer_modal.header';

export const StyledDrawerModalHeader = styled(StyledHeader).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  padding: ${props => props.theme.space.base * 5}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDrawerModalHeader.defaultProps = {
  theme: DEFAULT_THEME
};
