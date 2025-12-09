/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getLineHeight, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropzone.message';
const StyledMessage = styled.p.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMessage",
  componentId: "sc-5kb2l2-0"
})(["margin:0;line-height:", ";color:inherit;font-size:", ";font-weight:", ";", ";"], p => getLineHeight(p.theme.space.base * 5, p.theme.fontSizes.md), p => p.theme.fontSizes.md, p => p.theme.fontWeights.regular, componentStyles);

export { StyledMessage };
