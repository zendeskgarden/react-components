/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';

export const StyledListItem = styled.li`
  box-sizing: border-box;
  margin-left: ${props => `${props.theme.space.base}px`};
  user-select: none;

  &${props => (props.theme.rtl ? ':last-of-type' : ':first-of-type')} {
    margin-left: 0;
  }

  ${componentStyles};
`;
