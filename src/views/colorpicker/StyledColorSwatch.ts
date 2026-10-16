/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';

/**
 * 1. Override Bedrock CSS
 */
export const StyledColorSwatch = styled.table`
  border-collapse: collapse;
  line-height: normal; /* [1] */

  ${componentStyles};
`;
