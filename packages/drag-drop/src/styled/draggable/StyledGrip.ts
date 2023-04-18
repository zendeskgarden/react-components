/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'draggable.grip';

function sizeStyles({ theme }: ThemeProps<DefaultTheme>) {
  return {
    [theme.rtl ? 'marginLeft' : 'marginRight']: theme.space.xs
  };
}

export const StyledGrip = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  /* prettier-ignore */
  transition: color 0.1s ease-in-out;
  box-sizing: border-box;
  color: ${p => getColor('neutralHue', 600, p.theme)};

  ${sizeStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGrip.defaultProps = {
  theme: DEFAULT_THEME
};
