/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledBody } from './StyledBody';

const COMPONENT_ID = 'modals.drawer_modal.body';

export const StyledDrawerBody = styled(StyledBody).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  padding: ${props => props.theme.space.base * 5}px;
  color-scheme: only ${p => p.theme.colors.base};

  ${componentStyles};
`;
