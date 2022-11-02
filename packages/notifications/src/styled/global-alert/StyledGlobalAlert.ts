/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';

import { IGlobalAlertProps } from '../../types';
import { GLOBAL_ALERT_MIN_WIDTH, getStartingDirection } from './utility';

type StyledGlobalAlertProps = IGlobalAlertProps & ThemeProps<DefaultTheme>;

const COMPONENT_ID = 'notifications.global-alert';

function colorStyles(props: StyledGlobalAlertProps) {
  let borderColor = null;
  let backgroundColor = null;
  let color = props.theme.palette.white;

  switch (props.type) {
    case 'success':
      borderColor = getColor(props.theme.colors.successHue, 700, props.theme);
      backgroundColor = getColor(props.theme.colors.successHue, 600, props.theme);
      break;
    case 'error':
      borderColor = getColor(props.theme.colors.dangerHue, 700, props.theme);
      backgroundColor = getColor(props.theme.colors.dangerHue, 600, props.theme);
      break;
    case 'warning':
      borderColor = getColor(props.theme.colors.warningHue, 400, props.theme);
      backgroundColor = getColor(props.theme.colors.warningHue, 300, props.theme);
      color = getColor(props.theme.colors.warningHue, 800, props.theme) as string;
      break;
    case 'info':
    default:
      borderColor = getColor(props.theme.colors.primaryHue, 300, props.theme);
      backgroundColor = getColor(props.theme.colors.primaryHue, 200, props.theme);
      color = getColor(props.theme.colors.primaryHue, 800, props.theme) as string;
      break;
  }

  return css`
    border-color: ${borderColor};
    background-color: ${backgroundColor};
    color: ${color};
  `;
}

function sizeStyles(props: StyledGlobalAlertProps) {
  const height = props.theme.space.base * 13;
  const padding = props.theme.space.base * 2;
  const paddingStart = props.theme.space.base * 4;

  return css`
    border-bottom: 1px solid;
    padding: ${padding}px;
    width: 100%;
    min-width: ${GLOBAL_ALERT_MIN_WIDTH}px;
    min-height: ${height}px;
    ${getStartingDirection(props, 'padding', `${paddingStart}px`)};

    & > svg {
      margin-top: ${props.theme.space.base * 2.5}px;
    }

    & > div {
      margin-top: ${props.theme.space.base * 2}px;
      margin-bottom: ${props.theme.space.base * 2}px;
    }
  `;
}

export const StyledGlobalAlert = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<StyledGlobalAlertProps>`
  display: flex;
  position: relative;
  flex-flow: row nowrap;
  align-items: flex-start;
  box-sizing: border-box;

  ${sizeStyles}
  ${colorStyles}

  & svg,
  & button {
    flex-shrink: 0;
  }

  & > button + button {
    ${props => getStartingDirection(props, 'margin', '0')}
  }

  & > button:first-of-type {
    ${props => getStartingDirection(props, 'margin', 'auto')}
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGlobalAlert.defaultProps = {
  theme: DEFAULT_THEME
};
