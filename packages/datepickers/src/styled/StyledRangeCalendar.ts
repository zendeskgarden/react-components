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

/**
 * `DatePickerRange`'s outer calendar wrapper. Establishes the explicit
 * column tracks - two 7-day month grids, each sized to match
 * `StyledDayButton`'s own compact/default day-button size, separated by a
 * gap column - that both the toolbar (`StyledHeader`) and each month box
 * (`StyledCalendarMonth`) inherit via `subgrid`, mirroring `DatePicker`'s
 * `StyledCalendarGrid`.
 */
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
