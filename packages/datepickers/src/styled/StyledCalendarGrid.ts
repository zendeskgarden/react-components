/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { componentStyles, focusStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.calendar_grid';

interface IStyledCalendarGridProps {
  $isCompact?: boolean;
}

const sizeStyles = ({ $isCompact, theme }: IStyledCalendarGridProps & ThemeProps<DefaultTheme>) => {
  const columnWidth = theme.space.base * ($isCompact ? 8 : 10);
  const padding = theme.space.base * ($isCompact ? 4 : 5);

  return css`
    grid-template-columns: repeat(7, ${columnWidth}px);
    padding: ${padding}px;
  `;
};

/**
 * `DatePicker`'s outer calendar wrapper. Establishes the explicit column
 * tracks that both the toolbar (`StyledHeader`) and the month box
 * (`StyledCalendarMonth`) inherit via `subgrid`, so the toolbar's paddles
 * can align to specific day columns while remaining one contiguous
 * `role="toolbar"` element in DOM/reading order. Rendered as a `<section>`
 * so its `aria-labelledby` gives it an implicit `region` landmark role,
 * scrollable and keyboard-reachable via `useScrollRegion` when its
 * fixed-width columns overflow a narrower viewport.
 */
export const StyledCalendarGrid = styled.section.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledCalendarGridProps>`
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  overflow: auto;

  ${sizeStyles}
  ${props => focusStyles({ theme: props.theme })}

  ${componentStyles};
`;
