/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID$9 = 'datepickers.datepicker';
const sizeStyles$4 = ({
  $isCompact,
  theme
}) => {
  const margin = theme.space.base * ($isCompact ? 4 : 5);
  return css(["margin:", "px;"], margin);
};
const colorStyles$3 = ({
  theme
}) => {
  const foreground = getColor({
    variable: 'foreground.default',
    theme
  });
  return css(["background-color:transparent;color:", ";"], foreground);
};
const StyledDatePicker = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDatePicker",
  componentId: "sc-15hwqzh-0"
})(["direction:", ";", " ", " ", ";"], p => p.theme.rtl && 'rtl', sizeStyles$4, colorStyles$3, componentStyles);

export { StyledDatePicker };
