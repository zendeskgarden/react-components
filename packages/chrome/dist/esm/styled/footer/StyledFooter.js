/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { getFooterHeight } from '../utils.js';

const COMPONENT_ID$q = 'chrome.footer';
const colorStyles$9 = ({
  theme
}) => {
  const backgroundColor = getColor({
    theme,
    variable: 'background.default'
  });
  const borderColor = getColor({
    theme,
    variable: 'border.default'
  });
  return css(["border-top-color:", ";background-color:", ";"], borderColor, backgroundColor);
};
const sizeStyles$d = ({
  theme
}) => {
  const border = theme.borders.sm;
  const padding = `0 ${theme.space.base * 9}px`;
  const height = getFooterHeight(theme);
  return css(["box-sizing:border-box;border-top:", ";padding:", ";height:", ";"], border, padding, height);
};
const StyledFooter = styled.footer.attrs({
  'data-garden-id': COMPONENT_ID$q,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFooter",
  componentId: "sc-v7lib2-0"
})(["display:flex;align-items:center;justify-content:flex-end;", ";", ";", ";"], sizeStyles$d, colorStyles$9, componentStyles);

export { StyledFooter };
