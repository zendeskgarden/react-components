/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'draggable.grip';

function getMarginStyles({ theme }: ThemeProps<DefaultTheme>) {
  return {
    [theme.rtl ? 'marginLeft' : 'marginRight']: theme.space.xs
  };
}

export const StyledGrip = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  box-sizing: border-box;
  ${getMarginStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGrip.defaultProps = {
  theme: DEFAULT_THEME
};
