/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const COMPONENT_ID = 'chrome.sheet_title';

export const StyledSheetTitle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.default' })};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${componentStyles};
`;
