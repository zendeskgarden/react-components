/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledPage } from './StyledPage';

const COMPONENT_ID = 'pagination.navigation';

export const StyledNavigation = styled(StyledPage).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
