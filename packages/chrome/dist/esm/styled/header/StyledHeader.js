/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledLogoHeaderItem } from './StyledLogoHeaderItem.js';
import { getHeaderHeight } from '../utils.js';

const COMPONENT_ID = 'chrome.header';
const colorStyles = _ref => {
  let {
    theme,
    $isStandalone
  } = _ref;
  const backgroundColor = getColor({
    theme,
    variable: 'background.default'
  });
  const borderColor = getColor({
    theme,
    variable: 'border.default'
  });
  const boxShadowColor = getColor({
    variable: 'shadow.small',
    theme
  });
  const boxShadow = $isStandalone ? theme.shadows.lg('0', `${theme.space.base * 2}px`, boxShadowColor) : undefined;
  const foregroundColor = getColor({
    theme,
    variable: 'foreground.subtle'
  });
  return css(["border-bottom-color:", ";box-shadow:", ";background-color:", ";color:", ";"], borderColor, boxShadow, backgroundColor, foregroundColor);
};
const sizeStyles = _ref2 => {
  let {
    theme
  } = _ref2;
  const border = theme.borders.sm;
  const padding = `0 ${theme.space.base}px`;
  const fontSize = theme.fontSizes.md;
  const height = getHeaderHeight(theme);
  return css(["box-sizing:border-box;border-bottom:", ";padding:", ";height:", ";font-size:", ";"], border, padding, height, fontSize);
};
const StyledHeader = styled.header.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeader",
  componentId: "sc-1cexpz-0"
})(["display:flex;position:", ";align-items:center;justify-content:flex-end;", ";", ";", "{display:", ";}", ";"], props => props.$isStandalone && 'relative', sizeStyles, colorStyles, StyledLogoHeaderItem, props => props.$isStandalone && 'inline-flex', componentStyles);

export { StyledHeader };
