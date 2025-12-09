/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'pagination.list';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  return css(["color:", ";"], getColor({
    variable: 'foreground.subtle',
    theme
  }));
};
const StyledList = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledList",
  componentId: "sc-1uz2jxo-0"
})(["direction:", ";display:flex;justify-content:center;margin:0;padding:0;list-style:none;white-space:nowrap;", " &:focus{outline:none;}", ";"], p => p.theme.rtl && 'rtl', colorStyles, componentStyles);

export { StyledList };
