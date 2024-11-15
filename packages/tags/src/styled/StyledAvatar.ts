/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DataAttributes } from 'styled-components';
import { StyledBaseIcon, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tags.avatar';

export const StyledAvatar = styled(StyledBaseIcon).attrs<DataAttributes>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  flex-shrink: 0;
  font-size: 0; /* text content reset */

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
