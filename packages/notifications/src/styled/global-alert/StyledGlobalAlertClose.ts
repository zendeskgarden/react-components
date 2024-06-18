/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import {
  DEFAULT_THEME,
  focusStyles,
  retrieveComponentStyles,
  getColor
} from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';
import { IGlobalAlertProps } from '../../types';

const COMPONENT_ID = 'notifications.global_alert.close';

interface IStyledGlobalAlertCloseProps {
  $alertType: IGlobalAlertProps['type'];
}

export const colorStyles = (props: ThemeProps<DefaultTheme> & IStyledGlobalAlertCloseProps) => {
  const { $alertType, theme } = props;

  let hoverBackgroundColor;
  let hoverForegroundColor;
  let activeBackgroundColor;
  let activeForegroundColor;
  let focusColor;

  switch ($alertType) {
    case 'success':
      hoverBackgroundColor = getColor({
        variable: 'background.success',
        theme,
        transparency: theme.opacity[100]
      });
      hoverForegroundColor = theme.palette.white;
      activeBackgroundColor = getColor({
        variable: 'background.success',
        theme,
        transparency: theme.opacity[200]
      });
      activeForegroundColor = theme.palette.white;
      focusColor = 'foreground.successEmphasis';
      break;

    case 'error':
      hoverBackgroundColor = getColor({
        variable: 'background.danger',
        theme,
        transparency: theme.opacity[100]
      });
      hoverForegroundColor = theme.palette.white;
      activeBackgroundColor = getColor({
        variable: 'background.danger',
        theme,
        transparency: theme.opacity[200]
      });
      activeForegroundColor = theme.palette.white;
      focusColor = 'foreground.dangerEmphasis';
      break;

    case 'warning':
      hoverBackgroundColor = getColor({
        variable: 'background.warningEmphasis',
        transparency: theme.opacity[100],
        theme
      });
      hoverForegroundColor = getColor({
        variable: 'foreground.warningEmphasis',
        light: { offset: 200 },
        dark: { offset: 500 },
        theme
      });
      activeBackgroundColor = getColor({
        variable: 'background.warningEmphasis',
        transparency: theme.opacity[200],
        theme
      });
      activeForegroundColor = getColor({
        variable: 'foreground.warningEmphasis',
        light: { offset: 300 },
        dark: { offset: 600 },
        theme
      });
      focusColor = 'foreground.warning';
      break;

    case 'info':
      focusColor = 'foreground.primary';
      break;
  }

  return css`
    color: inherit;

    &:hover {
      background-color: ${hoverBackgroundColor};
      color: ${hoverForegroundColor};
    }

    ${focusStyles({
      theme,
      color: { variable: focusColor }
    })}

    &:active {
      background-color: ${activeBackgroundColor};
      color: ${activeForegroundColor};
    }
  `;
};

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  // Vertically center 32px icon button while retaining line height
  const marginVertical = `-${props.theme.space.base * 1.5}px`;
  const marginStart = `${props.theme.space.base * 2}px`;
  // Negative margin into container padding
  const marginEnd = `-${props.theme.space.base * 2}px`;

  return css`
    margin: ${marginVertical} ${props.theme.rtl ? marginStart : marginEnd} ${marginVertical}
      ${props.theme.rtl ? marginEnd : marginStart};
  `;
};

export const StyledGlobalAlertClose = styled(IconButton).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledGlobalAlertCloseProps>`
  ${sizeStyles};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGlobalAlertClose.defaultProps = {
  theme: DEFAULT_THEME
};
