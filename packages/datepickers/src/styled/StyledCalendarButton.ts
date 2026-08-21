/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';

const COMPONENT_ID = 'datepickers.calendar_button';

/*
 * Mirrors `ToggleIconButton`'s `aria-pressed` active styling, mapped to
 * `aria-expanded` so the button appears active while the calendar is open.
 */
const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const backgroundColor = getColor({
    theme,
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[200]
  });
  const color = getColor({
    theme,
    variable: 'foreground.subtle',
    dark: { offset: -200 },
    light: { offset: 200 }
  });

  return css`
    &&[aria-expanded='true'] {
      background-color: ${backgroundColor};
      color: ${color};
    }
  `;
};

export const StyledCalendarButton = styled(IconButton).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  flex: none;

  ${colorStyles};

  ${componentStyles};
`;
