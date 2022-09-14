/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'avatars.status-indicator.caption';

function sizeStyles(props: ThemeProps<DefaultTheme>) {
  return css`
    padding: 0 ${props.theme.space.base}px;
    line-height: ${props.theme.space.base * 5}px;
    font-size: ${props.theme.fontSizes.md};
    font-weight: ${props.theme.fontWeights.regular};
  `;
}

export const StyledStandaloneStatusCaption = styled.figcaption.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<ThemeProps<DefaultTheme>>`
  display: inline-block;
  box-sizing: inherit;

  ${sizeStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStandaloneStatusCaption.defaultProps = {
  theme: DEFAULT_THEME
};
