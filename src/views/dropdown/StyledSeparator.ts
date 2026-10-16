/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledListboxSeparator } from './StyledListboxSeparator';

export const StyledSeparator = styled(StyledListboxSeparator)`
  margin: ${props => props.theme.space.xxs} ${props => props.theme.space.xs};

  ${componentStyles};
`;
