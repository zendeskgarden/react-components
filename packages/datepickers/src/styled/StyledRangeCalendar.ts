/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.range_calendar';

interface IStyledRangeCalendarProps {
  $isCompact?: boolean;
}

const sizeStyles = ({
  $isCompact,
  theme
}: IStyledRangeCalendarProps & ThemeProps<DefaultTheme>) => {
  const columnWidth = theme.space.base * ($isCompact ? 8 : 10);
  const gap = theme.space.base * ($isCompact ? 4 : 5);

  return css`
    grid-template-columns: repeat(7, ${columnWidth}px) ${gap}px repeat(7, ${columnWidth}px);
    padding: ${gap}px;
  `;
};

/** Mirrors `StyledCalendarGrid`, but with two 7-day month tracks side by side. */
export const StyledRangeCalendar = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledRangeCalendarProps>`
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  overflow: auto;

  ${sizeStyles}
  ${componentStyles};
`;
