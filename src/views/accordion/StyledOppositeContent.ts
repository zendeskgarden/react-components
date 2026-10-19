/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';

export const StyledOppositeContent = styled.div`
  flex: 1;
  padding: ${props => `${props.theme.space.base * 5}px ${props.theme.space.base * 4}px`};
  text-align: ${props => (props.theme.rtl ? 'left' : 'right')};
  ${componentStyles};
`;
