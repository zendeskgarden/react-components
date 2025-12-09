/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledFloatingListbox } from '../combobox/StyledFloatingListbox.js';

const COMPONENT_ID = 'dropdowns.menu.floating';
const StyledFloatingMenu = styled(StyledFloatingListbox).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFloatingMenu",
  componentId: "sc-1rc7ahb-0"
})(["", ";"], componentStyles);

export { StyledFloatingMenu };
