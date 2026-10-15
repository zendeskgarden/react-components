/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';

export const StyledFooterItem = styled.span`
  display: flex;
  margin-${props => (props.theme.rtl ? 'right' : 'left')}: ${props => props.theme.space.sm};
  min-width: 0;

  &:first-child {
    margin-${props => (props.theme.rtl ? 'right' : 'left')}: 0;
  }

  ${componentStyles};
`;
