/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { getNavWidthExpanded, getNavWidth } from '../utils.js';

const COMPONENT_ID = 'chrome.nav';
const colorStyles = _ref => {
  let {
    theme,
    $hue
  } = _ref;
  const shade = $hue === 'chromeHue' ? 900 : undefined;
  const backgroundColor = getColor({
    theme,
    hue: $hue,
    shade
  });
  const foregroundColor = getColor({
    theme,
    dark: {
      hue: 'white'
    },
    light: {
      hue: 'black'
    }
  });
  return css(["background-color:", ";color:", ";"], backgroundColor, foregroundColor);
};
const sizeStyles = _ref2 => {
  let {
    theme,
    $isExpanded
  } = _ref2;
  const fontSize = theme.fontSizes.md;
  const width = $isExpanded ? getNavWidthExpanded() : getNavWidth(theme);
  return css(["width:", ";font-size:", ";"], width, fontSize);
};
const StyledNav = styled.nav.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledNav",
  componentId: "sc-6j462r-0"
})(["display:flex;position:relative;flex-direction:column;flex-shrink:0;order:-1;", ";", ";", ";"], colorStyles, sizeStyles, componentStyles);

export { StyledNav };
