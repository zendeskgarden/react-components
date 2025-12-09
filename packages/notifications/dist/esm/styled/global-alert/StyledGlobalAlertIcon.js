/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { StyledBaseIcon, componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID$1 = 'notifications.global_alert.icon';
const sizeStyles = props => {
  const size = props.theme.iconSizes.md;
  const marginTop = math(`(${props.theme.space.base * 5} - ${size}) / 2`);
  const marginHorizontal = `${props.theme.space.base * 2}px`;
  return css(["margin-top:", ";margin-", ":", ";width:", ";height:", ";"], marginTop, props.theme.rtl ? 'left' : 'right', marginHorizontal, size, size);
};
const colorStyles$1 = ({
  theme,
  $alertType
}) => {
  let color;
  switch ($alertType) {
    case 'success':
      color = getColor({
        variable: 'foreground.success',
        offset: -400,
        theme
      });
      break;
    case 'error':
      color = getColor({
        variable: 'foreground.danger',
        offset: -400,
        theme
      });
      break;
    case 'warning':
      color = getColor({
        variable: 'foreground.warning',
        theme
      });
      break;
    case 'info':
      color = getColor({
        variable: 'foreground.primary',
        theme
      });
      break;
  }
  return css(["color:", ";"], color);
};
const StyledGlobalAlertIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledGlobalAlertIcon",
  componentId: "sc-84ne9k-0"
})(["flex-shrink:0;", ";", ";", ";"], sizeStyles, colorStyles$1, componentStyles);

export { StyledGlobalAlertIcon };
