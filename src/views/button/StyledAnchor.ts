/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledButton } from './StyledButton';

/**
 * Accepts all `<a>` props
 */
export const StyledAnchor = styled(StyledButton)`
  direction: ${props => props.theme.rtl && 'rtl'};

  ${componentStyles};
`;
