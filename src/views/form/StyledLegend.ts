/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledLabel } from './StyledLabel';

/**
 * 1. Reset for <legend>.
 */
export const StyledLegend = styled(StyledLabel as 'legend')`
  padding: 0; /* [1] */

  ${componentStyles};
`;
