/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const retrieveSize = ({ isSmall, theme }: { isSmall?: boolean } & ThemeProps<DefaultTheme>) => {
  let width = theme.space.base * 70;

  if (isSmall) {
    width = theme.space.base * 56;
  }

  return css`
    width: ${width}px;
  `;
};

const COMPONENT_ID = 'datepickers.header';

export const StyledHeader = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<{ isSmall: boolean }>`
  display: flex;

  ${retrieveSize}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeader.defaultProps = {
  theme: DEFAULT_THEME
};
