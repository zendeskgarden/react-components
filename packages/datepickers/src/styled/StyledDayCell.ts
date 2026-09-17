/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

interface IStyledDayCellProps {
  $isHighlighted?: boolean;
  $isHighlightStart?: boolean;
  $isHighlightEnd?: boolean;
}

const highlightStyles = ({
  $isHighlightStart,
  $isHighlightEnd,
  theme
}: IStyledDayCellProps & ThemeProps<DefaultTheme>) => {
  const tint = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[100],
    theme
  });

  if (!$isHighlightStart && !$isHighlightEnd) {
    return css`
      background-color: ${tint};
    `;
  }

  const isTintTrailing = ($isHighlightStart && !theme.rtl) || ($isHighlightEnd && theme.rtl);
  const direction = isTintTrailing ? 'to right' : 'to left';

  return css`
    background-image: linear-gradient(${direction}, transparent 50%, ${tint} 50%);
  `;
};

const COMPONENT_ID = 'datepickers.day_cell';

export const StyledDayCell = styled.td.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledDayCellProps>`
  margin: 0;
  cursor: pointer;
  padding: 0;

  /* The visible focus ring is drawn on StyledDayNumber instead, scoped to this cell's :focus-visible state. */
  &:focus {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: default;
  }

  ${props => props.$isHighlighted && highlightStyles(props)}

  ${componentStyles};
`;
