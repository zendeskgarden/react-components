/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.calendar_item';

export const retrieveSize = ({
  isCompact,
  theme
}: IStyledCalendarItemProps & ThemeProps<DefaultTheme>) => {
  let size;

  if (isCompact) {
    size = `${theme.space.base * 8}px`;
  } else {
    size = `${theme.space.base * 10}px`;
  }

  return css`
    width: ${size};
    height: ${size};
  `;
};

interface IStyledCalendarItemProps {
  isCompact?: boolean;
}

export const StyledCalendarItem = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<IStyledCalendarItemProps>`
  display: inline-block;
  position: relative;
  vertical-align: top;

  ${retrieveSize}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCalendarItem.defaultProps = {
  theme: DEFAULT_THEME
};
