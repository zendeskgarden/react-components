/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import {
  DEFAULT_THEME,
  getLineHeight,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';

import { getStartingDirection } from './utility';

type StyledGlobalAlertContentProps = ThemeProps<DefaultTheme>;

const COMPONENT_ID = 'notifications.global-alert.content';

function sizeStyles(props: StyledGlobalAlertContentProps) {
  const marginStart = getStartingDirection(props, 'margin', `${props.theme.space.base * 2}px`);

  return css`
    ${marginStart};
    line-height: ${getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
    font-size: ${props.theme.fontSizes.md};
  `;
}

export const StyledGlobalAlertContent = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<StyledGlobalAlertContentProps>`
  ${sizeStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGlobalAlertContent.defaultProps = {
  theme: DEFAULT_THEME
};
