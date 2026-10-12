/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledDatePicker } from './StyledDatePicker';

export const StyledRangeCalendar = styled.div`
  display: flex;
  overflow: auto;

  ${StyledDatePicker} {
    margin: 0;

    ${props =>
      props.theme.rtl
        ? `&:last-of-type {margin-right: ${props.theme.space.base * 5}px}`
        : `&:first-of-type {margin-right: ${props.theme.space.base * 5}px}`}
  }

  ${componentStyles};
`;
