/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropzone.message_icon';

function getMarginStyles({ theme }: ThemeProps<DefaultTheme>) {
  return {
    [theme.rtl ? 'marginLeft' : 'marginRight']: theme.space.xs
  };
}

export const StyledMessageIcon = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  width: 12px;
  height: 12px;

  ${getMarginStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMessageIcon.defaultProps = {
  theme: DEFAULT_THEME
};
