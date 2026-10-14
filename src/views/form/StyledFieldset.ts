/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledField } from './StyledField';

const COMPONENT_ID = 'forms.fieldset';

interface IStyledFieldsetProps {
  $isCompact?: boolean;
}

// MIGRATE(component-ids): .attrs with non-data props — move them to the element JSX, after the last spread
export const StyledFieldset = styled(StyledField as 'fieldset').attrs({
  as: 'fieldset',
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledFieldsetProps>`
  ${StyledField} {
    margin-top: ${props => props.theme.space.base * (props.$isCompact ? 1 : 2)}px;
  }
  ${componentStyles};
`;
