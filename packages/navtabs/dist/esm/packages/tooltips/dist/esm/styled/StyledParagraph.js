/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tooltip.paragraph';
const StyledParagraph = styled.p.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.7.1'
}).withConfig({
  displayName: "StyledParagraph",
  componentId: "sc-wuqkfc-0"
})(["margin:0;", ";"], componentStyles);

export { StyledParagraph };
