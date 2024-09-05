/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { retrieveComponentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'draggable.grip';

function sizeStyles({ theme }: ThemeProps<DefaultTheme>) {
  const property = theme.rtl ? 'margin-left' : 'margin-right';

  return css`
    ${property}: ${theme.space.xs};
  `;
}

export const StyledGrip = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  /* prettier-ignore */
  transition: color 0.1s ease-in-out;
  box-sizing: border-box;
  color: ${p => getColor({ variable: 'foreground.subtle', theme: p.theme })};

  ${sizeStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
