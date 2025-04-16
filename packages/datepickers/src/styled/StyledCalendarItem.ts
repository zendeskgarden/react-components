/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.calendar_item';

export const sizeStyles = ({
  $isCompact,
  theme
}: IStyledCalendarItemProps & ThemeProps<DefaultTheme>) => {
  let size;

  if ($isCompact) {
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
  $isCompact?: boolean;
}

export const StyledCalendarItem = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledCalendarItemProps>`
  display: inline-block;
  position: relative;
  vertical-align: top;

  ${sizeStyles}

  ${componentStyles};
`;
