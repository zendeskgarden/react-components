/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'pane.content';

export const StyledPaneContent = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  height: 100%;
  overflow: auto;
  color-scheme: only ${p => p.theme.colors.base};

  &[hidden] {
    display: none;
  }

  ${componentStyles};
`;
