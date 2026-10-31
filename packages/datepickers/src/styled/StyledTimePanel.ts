/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.time_panel';

interface IStyledTimePanelProps {
  $isCompact?: boolean;
}

const sizeStyles = ({ $isCompact, theme }: IStyledTimePanelProps & ThemeProps<DefaultTheme>) => {
  const margin = theme.space.base * ($isCompact ? 4 : 5);
  const headerHeight = theme.space.base * ($isCompact ? 8 : 10);
  const dayLabelRowHeight = theme.space.base * ($isCompact ? 8 : 10);
  const dayRowHeight = theme.space.base * ($isCompact ? 8 : 10);
  const height = headerHeight + dayLabelRowHeight + dayRowHeight * 6;

  return css`
    margin: ${margin}px 0;
    height: ${height}px;
  `;
};

const colorStyles = ({ theme }: IStyledTimePanelProps & ThemeProps<DefaultTheme>) => {
  const borderColor = getColor({ variable: 'border.default', theme });

  return css`
    border-inline-start: ${theme.borders.sm} ${borderColor};
  `;
};

export const StyledTimePanel = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTimePanelProps>`
  display: flex;
  direction: ltr;

  ${sizeStyles}
  ${colorStyles}

  ${componentStyles};
`;
