/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { Field } from '../../elements/form/Field';
import { componentStyles } from '../../theming/utils/componentStyles';

/**
 * 1. IE11 reset.
 */
export const StyledHexField = styled(Field as unknown as 'div')`
  display: flex;
  flex-basis: 0; /* [1] */
  flex-direction: column;
  flex-grow: 1;
  width: auto;
  text-align: center;

  input {
    direction: ltr;
  }

  ${componentStyles};
`;
