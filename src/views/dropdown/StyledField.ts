/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';

/*
 * 1. Prevent grid or other container alignment from impacting Combobox label
 *    and value alignemnt.
 */
export const StyledField = styled.div`
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};
  text-align: start; /* [1] */

  ${componentStyles};
`;
