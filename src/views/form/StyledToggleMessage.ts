/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math } from 'polished';
import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledMessage } from './StyledMessage';
import { StyledMessageIcon } from './StyledMessageIcon';

export const StyledToggleMessage = styled(StyledMessage)`
  padding-${props => (props.theme.rtl ? 'right' : 'left')}:
    ${props => math(`${props.theme.space.base} * 12px`)};

  & ${StyledMessageIcon} {
    ${props => (props.theme.rtl ? 'right' : 'left')}: ${props =>
      math(`${props.theme.space.base} * 10px - ${props.theme.iconSizes.md}`)};
  }

  ${componentStyles};
`;
