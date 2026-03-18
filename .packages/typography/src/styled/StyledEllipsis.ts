/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const COMPONENT_ID = 'typography.ellipsis';

export const StyledEllipsis = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};

  ${componentStyles};
`;
