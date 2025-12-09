/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { StyledBaseNavItem } from './StyledBaseNavItem.js';
import { getProductColor } from '../utils.js';

const COMPONENT_ID$d = 'chrome.logo_nav_list_item';
const colorStyles$4 = ({
  theme,
  $hue,
  $product
}) => {
  const fillColor = getColor({
    theme,
    variable: 'foreground.default'
  });
  const color = $hue === 'chromeHue' ? getProductColor($product) : fillColor;
  return css(["color:", ";fill:", ";"], color, fillColor);
};
const StyledLogoNavItem = styled(StyledBaseNavItem).attrs({
  'data-garden-id': COMPONENT_ID$d,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledLogoNavItem",
  componentId: "sc-saaydx-0"
})(["order:-1;opacity:1;cursor:default;min-height:0;", ";"], colorStyles$4);

export { StyledLogoNavItem };
