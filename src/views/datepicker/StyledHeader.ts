/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';

export const StyledHeader = styled.div<{ $isCompact: boolean }>`
  display: flex;
  width: ${props =>
    props.$isCompact ? props.theme.space.base * 56 : props.theme.space.base * 70}px;

  ${componentStyles};
`;
