/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.time_column_header';

interface IStyledTimeColumnHeaderProps {
  $isCompact?: boolean;
}

const sizeStyles = ({
  $isCompact,
  theme
}: IStyledTimeColumnHeaderProps & ThemeProps<DefaultTheme>) => {
  const height = theme.space.base * ($isCompact ? 8 : 10);
  const fontSize = $isCompact ? theme.fontSizes.sm : theme.fontSizes.md;

  return css`
    height: ${height}px;
    font-size: ${fontSize};
  `;
};

const colorStyles = ({ theme }: IStyledTimeColumnHeaderProps & ThemeProps<DefaultTheme>) => {
  const foreground = getColor({ variable: 'foreground.subtle', theme });

  return css`
    color: ${foreground};
  `;
};

export const StyledTimeColumnHeader = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTimeColumnHeaderProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${sizeStyles}
  ${colorStyles}

  ${componentStyles};
`;
