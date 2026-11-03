/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { WithTheme } from '../../types/views';

export const sizeStyles = ({ $isCompact, theme }: WithTheme<IStyledCalendarItemProps>) => {
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

export const StyledCalendarItem = styled.div<WithTheme<IStyledCalendarItemProps>>`
  display: inline-block;
  position: relative;
  vertical-align: top;

  ${sizeStyles}

  ${componentStyles};
`;
