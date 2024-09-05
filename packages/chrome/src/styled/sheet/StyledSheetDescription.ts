/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, getLineHeight, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_description';

export const StyledSheetDescription = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  line-height: ${p => getLineHeight(p.theme.space.base * 4, p.theme.fontSizes.md)};
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
