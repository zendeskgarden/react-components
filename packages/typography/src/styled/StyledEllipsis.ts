/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME, isRtl, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.ellipsis';

export const StyledEllipsis = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  direction: ${props => (isRtl(props) ? 'rtl' : 'ltr')};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledEllipsis.defaultProps = {
  theme: DEFAULT_THEME
};
