/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import {
  getColorV8,
  DEFAULT_THEME,
  retrieveComponentStyles,
  focusStyles
} from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';

import { IGlobalAlertProps } from '../../types';

const COMPONENT_ID = 'notifications.global-alert.close';

interface IStyledGlobalAlertCloseProps {
  alertType: IGlobalAlertProps['type'];
}

export const colorStyles = (props: ThemeProps<DefaultTheme> & IStyledGlobalAlertCloseProps) => {
  let hoverBackgroundColor;
  let hoverForegroundColor;
  let activeBackgroundColor;
  let activeForegroundColor;
  let focusColor;

  switch (props.alertType) {
    case 'success':
      hoverBackgroundColor = getColorV8('successHue', 100, props.theme, 0.08);
      hoverForegroundColor = props.theme.palette.white;
      activeBackgroundColor = getColorV8('successHue', 100, props.theme, 0.2);
      activeForegroundColor = props.theme.palette.white;
      focusColor = 'successHue';
      break;

    case 'error':
      hoverBackgroundColor = getColorV8('dangerHue', 100, props.theme, 0.08);
      hoverForegroundColor = props.theme.palette.white;
      activeBackgroundColor = getColorV8('dangerHue', 100, props.theme, 0.2);
      activeForegroundColor = props.theme.palette.white;
      focusColor = 'dangerHue';
      break;

    case 'warning':
      hoverBackgroundColor = getColorV8('warningHue', 800, props.theme, 0.08);
      hoverForegroundColor = getColorV8('warningHue', 900, props.theme);
      activeBackgroundColor = getColorV8('warningHue', 800, props.theme, 0.2);
      activeForegroundColor = getColorV8('warningHue', 1000, props.theme);
      focusColor = 'warningHue';
      break;

    case 'info':
      hoverBackgroundColor = getColorV8('primaryHue', 700, props.theme, 0.08);
      hoverForegroundColor = getColorV8('primaryHue', 800, props.theme);
      activeBackgroundColor = getColorV8('primaryHue', 700, props.theme, 0.2);
      activeForegroundColor = getColorV8('primaryHue', 900, props.theme);
      focusColor = 'primaryHue';
      break;
  }

  return css`
    color: inherit;

    &:hover {
      background-color: ${hoverBackgroundColor};
      color: ${hoverForegroundColor};
    }

    ${focusStyles({
      theme: props.theme,
      hue: focusColor,
      shade: props.alertType === 'info' ? 600 : 800
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
  'data-garden-version': PACKAGE_VERSION,
  size: 'small'
})<IStyledGlobalAlertCloseProps>`
  ${sizeStyles};
  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGlobalAlertClose.defaultProps = {
  theme: DEFAULT_THEME
};
