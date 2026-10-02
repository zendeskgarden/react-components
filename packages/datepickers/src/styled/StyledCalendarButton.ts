/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';

/*
 * Design specifies the trigger should look identical at rest, on hover, and
 * while the calendar is open, so the underlying `IconButton`'s hover
 * feedback is pinned back to its resting background/icon color, and its
 * pointer cursor is pinned to match the surrounding input group's text
 * cursor rather than the button's own default pointer.
 */
const staticStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const iconColor = getColor({ theme, variable: 'foreground.subtle' });

  return css`
    && {
      cursor: text;
    }

    &&:hover {
      background-color: transparent;
    }

    &&:hover svg {
      color: ${iconColor};
    }
  `;
};

export const StyledCalendarButton = styled(IconButton)`
  flex: none;

  ${staticStyles};

  ${componentStyles};
`;
