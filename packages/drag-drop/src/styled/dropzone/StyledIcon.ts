/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropzone.icon';

function marginStyles({ theme }: ThemeProps<DefaultTheme>) {
  return { [theme.rtl ? 'marginLeft' : 'marginRight']: theme.space.xs };
}

/**
 * 1. Corrects the vertical text alignment of the icon within a dropzone message..
 */
export const StyledIcon = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: inline-block;
  width: ${props => props.theme.iconSizes.md};
  height: ${props => props.theme.iconSizes.md};
  vertical-align: text-bottom; /* [1] */

  ${marginStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledIcon.defaultProps = {
  theme: DEFAULT_THEME
};
