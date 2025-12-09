/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.codeblock';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const backgroundColor = getColor({
    theme,
    variable: 'background.recessed'
  });
  const foregroundColor = getColor({
    theme,
    variable: 'foreground.default'
  });
  return css(["background-color:", ";color:", ";"], backgroundColor, foregroundColor);
};
const StyledCodeBlock = styled.pre.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCodeBlock",
  componentId: "sc-5wky57-0"
})(["display:table;margin:0;padding:", "px;box-sizing:border-box;width:100%;direction:ltr;white-space:pre;counter-reset:linenumber;", ";", ";"], props => props.theme.space.base * 3, colorStyles, componentStyles);

export { StyledCodeBlock };
