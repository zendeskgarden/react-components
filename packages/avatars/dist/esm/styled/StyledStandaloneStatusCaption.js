/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getLineHeight } from '@zendeskgarden/react-theming';

const COMPONENT_ID$1 = 'avatars.status-indicator.caption';
function sizeStyles(props) {
  const marginRule = `margin-${props.theme.rtl ? 'right' : 'left'}: ${props.theme.space.base * 2}px;`;
  return css(["", " line-height:", ";font-size:", ";"], marginRule, getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md), props.theme.fontSizes.md);
}
const StyledStandaloneStatusCaption = styled.figcaption.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledStandaloneStatusCaption",
  componentId: "sc-aalyk1-0"
})(["", " ", ";"], sizeStyles, componentStyles);

export { StyledStandaloneStatusCaption };
