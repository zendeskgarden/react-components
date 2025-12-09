/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledValue } from './StyledValue.js';

const COMPONENT_ID = 'dropdowns.combobox.tags_button';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const color = getColor({
    theme,
    variable: 'foreground.primary'
  });
  return css(["color:", ";&:disabled{color:inherit;}"], color);
};
const StyledTagsButton = styled(StyledValue).attrs({
  as: 'button',
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTagsButton",
  componentId: "sc-6q5w33-0"
})(["display:inline-flex;flex:0 1 auto;align-items:center;border:none;background-color:transparent;cursor:pointer;min-width:auto;font-family:inherit;&:hover{text-decoration:underline;}", ";&:disabled{cursor:default;text-decoration:none;}", ";"], colorStyles, componentStyles);

export { StyledTagsButton };
