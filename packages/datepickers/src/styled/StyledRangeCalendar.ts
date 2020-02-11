/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { StyledDatepicker } from './StyledDatepicker';
import { DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.range_calendar';

export const StyledRangeCalendar = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})`
  display: flex;
  overflow: auto;

  ${StyledDatepicker} {
    margin: 0;

    ${props =>
      props.theme.rtl
        ? `&:last-of-type {margin-right: ${props.theme.space.base * 5}px}`
        : `&:first-of-type {margin-right: ${props.theme.space.base * 5}px}`}
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRangeCalendar.defaultProps = {
  theme: DEFAULT_THEME
};
