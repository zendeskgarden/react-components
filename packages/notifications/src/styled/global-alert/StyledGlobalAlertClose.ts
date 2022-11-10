/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { getColor, DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';
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
  let boxShadowColor;

  switch (props.alertType) {
    case 'success':
      hoverBackgroundColor = getColor('successHue', 100, props.theme, 0.08);
      hoverForegroundColor = props.theme.palette.white;
      activeBackgroundColor = getColor('successHue', 100, props.theme, 0.2);
      activeForegroundColor = props.theme.palette.white;
      boxShadowColor = getColor('successHue', 100, props.theme, 0.35);
      break;

    case 'error':
      hoverBackgroundColor = getColor('dangerHue', 100, props.theme, 0.08);
      hoverForegroundColor = props.theme.palette.white;
      activeBackgroundColor = getColor('dangerHue', 100, props.theme, 0.2);
      activeForegroundColor = props.theme.palette.white;
      boxShadowColor = getColor('dangerHue', 100, props.theme, 0.35);
      break;

    case 'warning':
      hoverBackgroundColor = getColor('warningHue', 800, props.theme, 0.08);
      hoverForegroundColor = getColor('warningHue', 900, props.theme);
      activeBackgroundColor = getColor('warningHue', 800, props.theme, 0.2);
      activeForegroundColor = getColor('warningHue', 1000, props.theme);
      boxShadowColor = getColor('warningHue', 800, props.theme, 0.35);
      break;

    case 'info':
      hoverBackgroundColor = getColor('primaryHue', 700, props.theme, 0.08);
      hoverForegroundColor = getColor('primaryHue', 800, props.theme);
      activeBackgroundColor = getColor('primaryHue', 700, props.theme, 0.2);
      activeForegroundColor = getColor('primaryHue', 900, props.theme);
      boxShadowColor = getColor('primaryHue', 700, props.theme, 0.35);
      break;
  }

  return css`
    color: inherit;

    &:hover {
      background-color: ${hoverBackgroundColor};
      color: ${hoverForegroundColor};
    }

    &[data-garden-focus-visible] {
      box-shadow: ${props.theme.shadows.md(boxShadowColor!)};
    }

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
