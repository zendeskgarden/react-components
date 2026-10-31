/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { WithTheme } from '../../types/views';
import { StyledFileClose } from './StyledFileClose';

export const StyledFileDelete = styled(StyledFileClose)<WithTheme>`
  color: ${props => getColor({ theme: props.theme, variable: 'foreground.danger' })};

  ${componentStyles};
`;
