/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import {
  getColor,
  DEFAULT_THEME,
  focusStyles,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';

import { IGlobalAlertProps } from '../../types';
import { colorStyles as basicColorStyles } from './StyledGlobalAlertClose';

const COMPONENT_ID = 'notifications.global_alert.button';

interface IStyledGlobalAlertButtonProps {
  $alertType: IGlobalAlertProps['type'];
  isBasic?: boolean;
}

function colorStyles(
  props: IStyledGlobalAlertButtonProps & ThemeProps<DefaultTheme> & IStyledGlobalAlertButtonProps
) {
  const { $alertType, isBasic, theme } = props;

  if (isBasic) {
    return basicColorStyles(props);
  }

  let hue;
  let shade;
  let focusVariable;

  switch ($alertType) {
    case 'success':
      hue = 'successHue';
      focusVariable = 'foreground.successEmphasis';
      shade = 900;
      break;
    case 'error':
      hue = 'dangerHue';
      focusVariable = 'foreground.dangerEmphasis';
      shade = 900;
      break;
    case 'warning':
      hue = 'warningHue';
      focusVariable = 'foreground.warning';
      shade = 700;
      break;
    case 'info':
      hue = 'primaryHue';
      focusVariable = 'foreground.primary';
      shade = 700;
      break;
  }

  const backgroundColor = getColor({ hue, shade, theme });
  const hoverBackgroundColor = getColor({ hue, shade, offset: 100, theme });
  const activeBackgroundColor = getColor({ hue, shade, offset: 200, theme });

  return css`
    background-color: ${backgroundColor};
    color: ${getColor({ hue: 'white', theme })};

    &:hover {
      background-color: ${hoverBackgroundColor};
    }

    ${focusStyles({ theme, color: { variable: focusVariable } })}

    &:active {
      background-color: ${activeBackgroundColor};
    }
  `;
}

function sizeStyles(props: ThemeProps<DefaultTheme>) {
  // Vertically center 32px button while retaining line height
  const marginVertical = `-${props.theme.space.base * 1.5}px`;
  const marginStart = `${props.theme.space.base * 2}px`;

  return css`
    margin: ${marginVertical} ${props.theme.rtl ? marginStart : 0} ${marginVertical}
      ${props.theme.rtl ? 0 : marginStart};
  `;
}

export const StyledGlobalAlertButton = styled(Button).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  flex-shrink: 0;

  ${sizeStyles};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGlobalAlertButton.defaultProps = {
  theme: DEFAULT_THEME
};
