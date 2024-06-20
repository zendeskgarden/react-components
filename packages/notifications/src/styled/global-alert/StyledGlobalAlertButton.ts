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

type OffsetOptions = Record<string, Record<string, number>>;

function colorStyles(
  props: IStyledGlobalAlertButtonProps & ThemeProps<DefaultTheme> & IStyledGlobalAlertButtonProps
) {
  const { $alertType, isBasic, theme } = props;

  if (isBasic) {
    return basicColorStyles(props);
  }

  let bgVariable;
  let offsetOptions: OffsetOptions = { light: { offset: 200 }, dark: { offset: 300 } };
  let offsetHoverOptions: OffsetOptions = { light: { offset: 300 }, dark: { offset: 400 } };
  let offsetActiveOptions: OffsetOptions = { light: { offset: 400 }, dark: { offset: 500 } };
  let focusVariable;

  switch ($alertType) {
    case 'success':
      bgVariable = 'background.successEmphasis';
      focusVariable = 'foreground.successEmphasis';
      break;
    case 'error':
      bgVariable = 'background.dangerEmphasis';
      focusVariable = 'foreground.dangerEmphasis';
      break;
    case 'warning':
      bgVariable = 'background.warningEmphasis';
      focusVariable = 'foreground.warningEmphasis';
      offsetOptions = { dark: { offset: 100 } };
      offsetHoverOptions = { light: { offset: 100 }, dark: { offset: 200 } };
      offsetActiveOptions = { light: { offset: 200 }, dark: { offset: 300 } };
      break;
    case 'info':
      bgVariable = 'background.primaryEmphasis';
      offsetOptions = { dark: { offset: 100 } };
      offsetHoverOptions = { light: { offset: 100 }, dark: { offset: 200 } };
      offsetActiveOptions = { light: { offset: 200 }, dark: { offset: 300 } };
      focusVariable = 'foreground.primary';
      break;
  }

  const backgroundColor = getColor({
    variable: bgVariable,
    ...offsetOptions,
    theme
  });
  const hoverBackgroundColor = getColor({
    variable: bgVariable,
    ...offsetHoverOptions,
    theme
  });
  const activeBackgroundColor = getColor({
    variable: bgVariable,
    ...offsetActiveOptions,
    theme
  });

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
