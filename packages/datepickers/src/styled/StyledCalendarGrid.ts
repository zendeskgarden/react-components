/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

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
 * Establishes the column tracks that the toolbar and month box inherit via
 * `subgrid`, so the toolbar's paddles can align to day columns while
 * staying one contiguous `role="toolbar"` element.
 */
export const StyledCalendarGrid = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledCalendarGridProps>`
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  overflow: auto;

  ${sizeStyles}
  ${componentStyles};
`;
