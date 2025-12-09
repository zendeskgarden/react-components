/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.datepicker';
const sizeStyles = _ref => {
  let {
    $isCompact,
    theme
  } = _ref;
  const margin = theme.space.base * ($isCompact ? 4 : 5);
  return css(["margin:", "px;"], margin);
};
const colorStyles = _ref2 => {
  let {
    theme
  } = _ref2;
  const foreground = getColor({
    variable: 'foreground.default',
    theme
  });
  return css(["background-color:transparent;color:", ";"], foreground);
};
const StyledDatePicker = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDatePicker",
  componentId: "sc-15hwqzh-0"
})(["direction:", ";", " ", " ", ";"], p => p.theme.rtl && 'rtl', sizeStyles, colorStyles, componentStyles);

export { StyledDatePicker };
