/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledField } from './StyledField';

interface IStyledFieldsetProps {
  $isCompact?: boolean;
}

export const StyledFieldset = styled(StyledField as 'fieldset')<IStyledFieldsetProps>`
  ${StyledField} {
    margin-top: ${props => props.theme.space.base * (props.$isCompact ? 1 : 2)}px;
  }
  ${componentStyles};
`;
