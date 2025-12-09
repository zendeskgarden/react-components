/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { StyledBaseIcon, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$B = 'forms.input_message_icon';
const StyledMessageIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$B,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMessageIcon",
  componentId: "sc-1ph2gba-0"
})(["width:", ";height:", ";", ";"], props => props.theme.iconSizes.md, props => props.theme.iconSizes.md, componentStyles);

export { StyledMessageIcon };
