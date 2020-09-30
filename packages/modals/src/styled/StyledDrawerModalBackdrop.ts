/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledBackdrop } from './StyledBackdrop';

const COMPONENT_ID = 'modals.drawer_modal.backdrop';

export const StyledDrawerModalBackdrop = styled(StyledBackdrop).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  background-color: transparent;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDrawerModalBackdrop.defaultProps = {
  theme: DEFAULT_THEME
};
