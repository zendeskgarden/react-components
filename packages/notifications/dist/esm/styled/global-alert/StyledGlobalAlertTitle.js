/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'notifications.global_alert.title';
const colorStyles = _ref => {
  let {
    theme,
    $alertType
  } = _ref;
  let color;
  switch ($alertType) {
    case 'success':
    case 'error':
      color = theme.palette.white;
      break;
    case 'warning':
      color = getColor({
        variable: 'foreground.warningEmphasis',
        theme
      });
      break;
    case 'info':
      color = getColor({
        variable: 'foreground.primary',
        offset: 200,
        theme
      });
      break;
  }
  return css(["color:", ";"], color);
};
const StyledGlobalAlertTitle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledGlobalAlertTitle",
  componentId: "sc-10clqbo-0"
})(["display:inline;margin-", ":", "px;font-weight:", ";", ";", ";"], props => props.theme.rtl ? 'left' : 'right', props => props.theme.space.base * 2, props => props.$isRegular ? props.theme.fontWeights.regular : props.theme.fontWeights.semibold, colorStyles, componentStyles);

export { StyledGlobalAlertTitle };
