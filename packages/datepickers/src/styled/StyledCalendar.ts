/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.calendar';

interface IStyledCalendarProps {
  $isCompact?: boolean;
}

export const StyledCalendar = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<IStyledCalendarProps>`
  width: ${props =>
    props.$isCompact ? props.theme.space.base * 56 : props.theme.space.base * 70}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCalendar.defaultProps = {
  theme: DEFAULT_THEME
};
