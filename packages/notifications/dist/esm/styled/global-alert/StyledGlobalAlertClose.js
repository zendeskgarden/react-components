/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor, focusStyles } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';

const COMPONENT_ID$4 = 'notifications.global_alert.close';
const colorStyles$3 = props => {
  const {
    $alertType,
    theme
  } = props;
  let hoverBackgroundColor;
  let hoverForegroundColor;
  let activeBackgroundColor;
  let activeForegroundColor;
  let focusVariable;
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
      focusVariable = 'foreground.successEmphasis';
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
      focusVariable = 'foreground.dangerEmphasis';
      break;
    case 'warning':
      hoverBackgroundColor = getColor({
        variable: 'background.warningEmphasis',
        transparency: theme.opacity[100],
        theme
      });
      hoverForegroundColor = getColor({
        variable: 'foreground.warningEmphasis',
        offset: 200,
        theme
      });
      activeBackgroundColor = getColor({
        variable: 'background.warningEmphasis',
        transparency: theme.opacity[200],
        theme
      });
      activeForegroundColor = getColor({
        variable: 'foreground.warningEmphasis',
        offset: 300,
        theme
      });
      focusVariable = 'foreground.warning';
      break;
    default:
      focusVariable = 'foreground.primary';
  }
  return css(["color:inherit;&:hover{background-color:", ";color:", ";}", " &:active{background-color:", ";color:", ";}"], hoverBackgroundColor, hoverForegroundColor, focusStyles({
    theme,
    color: {
      variable: focusVariable
    }
  }), activeBackgroundColor, activeForegroundColor);
};
const sizeStyles$2 = props => {
  const marginVertical = `-${props.theme.space.base * 1.5}px`;
  const marginStart = `${props.theme.space.base * 2}px`;
  const marginEnd = `-${props.theme.space.base * 2}px`;
  return css(["margin:", " ", " ", " ", ";"], marginVertical, props.theme.rtl ? marginStart : marginEnd, marginVertical, props.theme.rtl ? marginEnd : marginStart);
};
const StyledGlobalAlertClose = styled(IconButton).attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledGlobalAlertClose",
  componentId: "sc-1g5s93s-0"
})(["", ";", ";", ";"], sizeStyles$2, colorStyles$3, componentStyles);

export { StyledGlobalAlertClose, colorStyles$3 as colorStyles };
