/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { Anchor } from '@zendeskgarden/react-buttons';

import { IGlobalAlertAnchorProps, Type } from '../../types';

type StyledGlobalAlertAnchorProps = IGlobalAlertAnchorProps &
  ThemeProps<DefaultTheme> & {
    kind: Type;
  };

const COMPONENT_ID = 'notifications.global-alert.anchor';

export function colorStyles(props: StyledGlobalAlertAnchorProps) {
  let color = null;
  let hoverColor = props.theme.palette.white;
  let activeColor = props.theme.palette.white;
  let shadowColor = null;

  switch (props.kind) {
    case 'success':
      color = getColor(props.theme.colors.successHue, 100, props.theme);
      shadowColor = getColor(props.theme.colors.successHue, 200, props.theme, 0.35);
      break;
    case 'warning':
      color = getColor(props.theme.colors.warningHue, 800, props.theme);
      hoverColor = getColor(props.theme.colors.warningHue, 900, props.theme) as string;
      activeColor = getColor(props.theme.colors.warningHue, 1000, props.theme) as string;
      shadowColor = getColor(props.theme.colors.warningHue, 800, props.theme, 0.35);
      break;
    case 'error':
      color = getColor(props.theme.colors.dangerHue, 100, props.theme);
      shadowColor = getColor(props.theme.colors.dangerHue, 200, props.theme, 0.35);
      break;
    case 'info':
      color = getColor(props.theme.colors.primaryHue, 700, props.theme);
      hoverColor = getColor(props.theme.colors.primaryHue, 800, props.theme) as string;
      activeColor = getColor(props.theme.colors.primaryHue, 900, props.theme) as string;
      shadowColor = getColor(props.theme.colors.primaryHue, 600, props.theme, 0.35);
      break;
  }

  return css`
    color: ${color};

    &:hover {
      color: ${hoverColor};
    }

    &:active,
    &:focus {
      color: ${activeColor};
    }

    &:active,
    &:focus-visible,
    &[data-garden-focus-visible] {
      box-shadow: ${props.theme.shadows.sm(shadowColor as string)};
    }
  `;
}

function sizeStyles(props: StyledGlobalAlertAnchorProps) {
  return css`
    border-radius: ${props.theme.space.base / 2}px;
    font-size: ${props.theme.fontSizes.md};
  `;
}

export const StyledGlobalAlertAnchor = styled(Anchor).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<StyledGlobalAlertAnchorProps>`
  text-decoration: underline;
  white-space: nowrap;

  ${colorStyles}
  ${sizeStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGlobalAlertAnchor.defaultProps = {
  theme: DEFAULT_THEME
};
