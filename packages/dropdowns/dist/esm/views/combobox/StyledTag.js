/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { hideVisually } from 'polished';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';
import { Tag } from '@zendeskgarden/react-tags';

const COMPONENT_ID$c = 'dropdowns.combobox.tag';
const StyledTag = styled(Tag).attrs({
  'data-garden-id': COMPONENT_ID$c,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTag",
  componentId: "sc-1alam0r-0"
})(["&[aria-disabled='true']{color:", ";}&[hidden]{display:revert;", "}", ";"], props => props.hue ? undefined : getColor({
  theme: props.theme,
  variable: 'foreground.disabled'
}), hideVisually(), componentStyles);

export { StyledTag };
