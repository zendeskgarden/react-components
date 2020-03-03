/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

export const StyledTileInput = styled.input`
  position: absolute;
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
`;

StyledTileInput.defaultProps = {
  theme: DEFAULT_THEME
};
