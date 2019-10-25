/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css, DefaultTheme, ThemeProps } from 'styled-components';

export const retrieveSpacing = ({
  isSmall,
  theme
}: { isSmall?: boolean } & ThemeProps<DefaultTheme>) => {
  if (isSmall) {
    return `${theme.space.base * 8}px`;
  }

  return `${theme.space.base * 10}px`;
};

export const boldedStyling = css<{ isSmall: boolean }>`
  line-height: ${props => props.theme.lineHeights.md};
  font-size: ${props => (props.isSmall ? props.theme.fontSizes.sm : props.theme.fontSizes.md)};
  font-weight: ${props => props.theme.fontWeights.semibold};
`;
