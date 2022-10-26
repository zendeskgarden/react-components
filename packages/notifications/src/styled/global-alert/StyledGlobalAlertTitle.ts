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

import { IGlobalAlertTitleProps } from '../../types';
import { getStartingDirection } from './utility';

type StyledGlobalAlertTitleProps = IGlobalAlertTitleProps & ThemeProps<DefaultTheme>;

const COMPONENT_ID = 'notifications.global-alert.title';

function sizeStyles(props: StyledGlobalAlertTitleProps) {
  const marginStart = getStartingDirection(props, 'margin', `${props.theme.space.base * 2}px`);

  return css`
    ${marginStart};
    line-height: ${getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
    font-size: ${props.theme.fontSizes.md};
    font-weight: ${props.isRegular
      ? props.theme.fontWeights.regular
      : props.theme.fontWeights.semibold};
  `;
}

export const StyledGlobalAlertTitle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<StyledGlobalAlertTitleProps>`
  ${sizeStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGlobalAlertTitle.defaultProps = {
  theme: DEFAULT_THEME
};
