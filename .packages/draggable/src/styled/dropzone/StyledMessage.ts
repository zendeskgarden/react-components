/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getLineHeight } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const COMPONENT_ID = 'dropzone.message';

export const StyledMessage = styled.p.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  margin: 0;
  line-height: ${p => getLineHeight(p.theme.space.base * 5, p.theme.fontSizes.md)};
  color: inherit;
  font-size: ${p => p.theme.fontSizes.md};
  font-weight: ${p => p.theme.fontWeights.regular};

  ${componentStyles};
`;
