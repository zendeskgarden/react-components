/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { focusStyles } from '../../theming/utils/focusStyles';

export const StyledCodeBlockContainer = styled.div`
  transition: box-shadow 0.1s ease-in-out;
  overflow: auto;

  ${props =>
    focusStyles({
      theme: props.theme
    })}

  ${componentStyles};
`;
