/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { menuStyles, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.combobox.floating';
const StyledFloatingListbox = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFloatingListbox",
  componentId: "sc-1cp6spf-0"
})(["top:0;left:0;", ";", ";"], props => menuStyles(props.$position, {
  theme: props.theme,
  hidden: props.$isHidden,
  animationModifier: '[data-garden-animate="true"]',
  zIndex: props.$zIndex
}), componentStyles);

export { StyledFloatingListbox };
