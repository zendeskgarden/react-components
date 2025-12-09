/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID$2 = 'chrome.sheet_footer';
const colorStyles$1 = ({
  theme
}) => {
  const borderColor = getColor({
    theme,
    variable: 'border.subtle'
  });
  return css(["border-top-color:", ";"], borderColor);
};
const sizeStyles$1 = ({
  theme,
  $isCompact
}) => {
  const border = theme.borders.sm;
  const padding = `${theme.space.base * ($isCompact ? 2.5 : 5)}px`;
  return css(["border-top:", ";padding:", ";"], border, padding);
};
const StyledSheetFooter = styled.footer.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSheetFooter",
  componentId: "sc-2cktos-0"
})(["display:flex;flex-flow:row wrap;align-items:center;justify-content:", ";", ";", ";", ";"], props => props.$isCompact ? 'center' : 'flex-end', sizeStyles$1, colorStyles$1, componentStyles);

export { StyledSheetFooter };
