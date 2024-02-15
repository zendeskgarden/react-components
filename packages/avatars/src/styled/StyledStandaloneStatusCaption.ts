/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import {
  DEFAULT_THEME,
  getLineHeight,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'avatars.status-indicator.caption';

function sizeStyles(props: ThemeProps<DefaultTheme>) {
  const marginRule = `margin-${props.theme.rtl ? 'right' : 'left'}: ${
    props.theme.space.base * 2
  }px;`;

  return css`
    ${marginRule}
    line-height: ${getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};
    font-size: ${props.theme.fontSizes.md};
  `;
}

export const StyledStandaloneStatusCaption = styled.figcaption.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<ThemeProps<DefaultTheme>>`
  ${sizeStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStandaloneStatusCaption.defaultProps = {
  theme: DEFAULT_THEME
};
