/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor, focusStyles } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';
import { colorStyles } from './StyledGlobalAlertClose.js';

const COMPONENT_ID$3 = 'notifications.global_alert.button';
function colorStyles$2(props) {
  const {
    $alertType,
    isBasic,
    theme
  } = props;
  if (isBasic) {
    return colorStyles(props);
  }
  let bgVariable;
  let offsetOptions;
  let offsetHoverOptions;
  let offsetActiveOptions;
  let focusVariable;
  switch ($alertType) {
    case 'success':
      bgVariable = 'background.successEmphasis';
      offsetOptions = {
        offset: 200
      };
      offsetHoverOptions = {
        offset: 300
      };
      offsetActiveOptions = {
        offset: 400
      };
      focusVariable = 'foreground.successEmphasis';
      break;
    case 'error':
      bgVariable = 'background.dangerEmphasis';
      offsetOptions = {
        offset: 200
      };
      offsetHoverOptions = {
        offset: 300
      };
      offsetActiveOptions = {
        offset: 400
      };
      focusVariable = 'foreground.dangerEmphasis';
      break;
    case 'warning':
      bgVariable = 'background.warningEmphasis';
      offsetOptions = {};
      offsetHoverOptions = {
        offset: 100
      };
      offsetActiveOptions = {
        offset: 200
      };
      focusVariable = 'foreground.warning';
      break;
    case 'info':
      bgVariable = 'background.primaryEmphasis';
      offsetOptions = {};
      offsetHoverOptions = {
        offset: 100
      };
      offsetActiveOptions = {
        offset: 200
      };
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
  return css(["background-color:", ";color:", ";&:hover{background-color:", ";}", " &:active{background-color:", ";}"], backgroundColor, getColor({
    hue: 'white',
    theme
  }), hoverBackgroundColor, focusStyles({
    theme,
    color: {
      variable: focusVariable
    }
  }), activeBackgroundColor);
}
function sizeStyles$1(props) {
  const marginVertical = `-${props.theme.space.base * 1.5}px`;
  const marginStart = `${props.theme.space.base * 2}px`;
  return css(["margin:", " ", " ", " ", ";"], marginVertical, props.theme.rtl ? marginStart : 0, marginVertical, props.theme.rtl ? 0 : marginStart);
}
const StyledGlobalAlertButton = styled(Button).attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledGlobalAlertButton",
  componentId: "sc-1txe91a-0"
})(["flex-shrink:0;", ";", ";", ";"], sizeStyles$1, colorStyles$2, componentStyles);

export { StyledGlobalAlertButton };
