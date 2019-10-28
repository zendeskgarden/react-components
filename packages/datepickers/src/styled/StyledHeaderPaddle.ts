/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const retrieveSizing = ({
  isCompact,
  theme
}: { isCompact?: boolean } & ThemeProps<DefaultTheme>) => {
  let size = theme.space.base * 10;

  if (isCompact) {
    size = theme.space.base * 8;
  }

  return css`
    width: ${size}px;
    height: ${size}px;
  `;
};

const COMPONENT_ID = 'datepickers.header_paddle';

export const StyledHeaderPaddle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<{
  isCompact: boolean;
  isHidden?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props => props.theme.rtl && 'rotate(180deg)'};
  visibility: ${props => props.isHidden && 'hidden'};
  border-radius: 50%;
  cursor: pointer;

  ${/* sc-block */ retrieveSizing}

  :hover {
    background-color: ${props => getColor('primaryHue', 600, props.theme, 0.08)};
    color: ${props => props.theme.colors.foreground};
  }

  :active {
    background-color: ${props => getColor('primaryHue', 600, props.theme, 0.2)};
    color: ${props => props.theme.colors.foreground};
  }

  color: ${props => getColor('neutralHue', 600, props.theme)};

  * {
    width: ${props => `${props.theme.space.base * 4}px`};
    height: ${props => `${props.theme.space.base * 4}px`};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderPaddle.defaultProps = {
  theme: DEFAULT_THEME
};
