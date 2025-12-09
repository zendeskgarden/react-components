/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$3 = 'datepickers.calendar_item';
const sizeStyles$2 = ({
  $isCompact,
  theme
}) => {
  let size;
  if ($isCompact) {
    size = `${theme.space.base * 8}px`;
  } else {
    size = `${theme.space.base * 10}px`;
  }
  return css(["width:", ";height:", ";"], size, size);
};
const StyledCalendarItem = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCalendarItem",
  componentId: "sc-143w8wb-0"
})(["display:inline-block;position:relative;vertical-align:top;", " ", ";"], sizeStyles$2, componentStyles);

export { StyledCalendarItem, sizeStyles$2 as sizeStyles };
