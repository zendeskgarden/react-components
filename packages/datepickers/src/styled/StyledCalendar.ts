/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.calendar';

export const retrieveSizing = ({
  isSmall,
  theme
}: IStyledCalendarProps & ThemeProps<DefaultTheme>) => {
  let size = theme.space.base * 70;

  if (isSmall) {
    size = theme.space.base * 56;
  }

  return css`
    width: ${size}px;
  `;
};

interface IStyledCalendarProps {
  isSmall?: boolean;
}

export const StyledCalendar = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<IStyledCalendarProps>`
  ${retrieveSizing}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCalendar.defaultProps = {
  theme: DEFAULT_THEME
};
