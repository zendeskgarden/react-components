/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { StyledBaseIcon, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.nav_item_icon';
const sizeStyles = _ref => {
  let {
    theme
  } = _ref;
  const size = theme.iconSizes.lg;
  return css(["width:", ";height:", ";"], size, size);
};
const StyledNavItemIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledNavItemIcon",
  componentId: "sc-7w9rpt-0"
})(["align-self:flex-start;order:0;border-radius:", ";", ";", ";"], props => props.theme.borderRadii.md, sizeStyles, componentStyles);

export { StyledNavItemIcon };
