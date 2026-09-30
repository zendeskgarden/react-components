/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.highlight';

interface IStyledHighlightProps {
  $isHighlighted?: boolean;
  $isHighlightStart?: boolean;
  $isHighlightEnd?: boolean;
}

const highlightStyles = ({
  $isHighlightStart,
  $isHighlightEnd,
  theme
}: IStyledHighlightProps & ThemeProps<DefaultTheme>) => {
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

  const isCapLeft = ($isHighlightStart && !theme.rtl) || ($isHighlightEnd && theme.rtl);
  const side = isCapLeft ? 'left' : 'right';

  return css`
    border-top-${side}-radius: 50%;
    border-bottom-${side}-radius: 50%;
    background-color: ${tint};
  `;
};

/** Paints a `DatePickerRange` day's range band, behind its day number within `StyledCalendarItem`. */
export const StyledHighlight = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHighlightProps>`
  position: absolute;
  inset: 0;
  z-index: -1;

  ${props => props.$isHighlighted && highlightStyles(props)}

  ${componentStyles};
`;
