/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'notifications.paragraph';
const StyledParagraph = styled.p.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledParagraph",
  componentId: "sc-12tmd6p-0"
})(["margin:", "px 0 0;", ";"], props => props.theme.space.base * 2, componentStyles);

export { StyledParagraph };
