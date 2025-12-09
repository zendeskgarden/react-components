/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { StyledBaseIcon, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.header_item_icon';
const sizeStyles = _ref => {
  let {
    theme
  } = _ref;
  const margin = `0 ${theme.space.base * 0.75}px`;
  const size = theme.iconSizes.md;
  return css(["margin:", ";width:", ";min-width:", ";height:", ";"], margin, size, size, size);
};
const StyledHeaderItemIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderItemIcon",
  componentId: "sc-1jhhp6z-0"
})(["transition:transform 0.25s ease-in-out;", ";", ";"], sizeStyles, componentStyles);

export { StyledHeaderItemIcon };
