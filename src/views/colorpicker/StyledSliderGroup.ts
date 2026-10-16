/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';

export const StyledSliderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.space.base * 2}px;

  ${componentStyles};
`;
